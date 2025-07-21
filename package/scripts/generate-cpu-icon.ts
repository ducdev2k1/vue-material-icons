import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

const SVG_DIR = path.resolve('src/assets/cpu');
const OUTPUT_DIR = path.resolve('src/components/Cpu');



fs.ensureDirSync(OUTPUT_DIR);

// Đổi tên sang PascalCase
function pascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase()) + 'Icon';
}

// Tạo name componenet
const createComponentName = (name: string) => `Cpu${pascalCase(name)}`;

// Extract thẻ SVG chính như <path>, <circle>...
function extractSvgElements(svg: string): { tag: string; props: Record<string, any> }[] {
  const elements: { tag: string; props: Record<string, any> }[] = [];
  const tagRegex = /<(\w+)([^>]*?)\/?>/g;

  let match;
  while ((match = tagRegex.exec(svg)) !== null) {
    const tag = match[1];
    const rawProps = match[2];
    if (tag === 'svg' || tag === 'title' || tag === 'desc') continue;

    const props: Record<string, any> = {};
    const propRegex = /(\w+)="(.*?)"/g;
    let propMatch;
    while ((propMatch = propRegex.exec(rawProps)) !== null) {
      props[propMatch[1]] = propMatch[2];
    }

    elements.push({ tag, props });
  }

  return elements;
}

async function generateIcons() {
  const files = await glob(`${SVG_DIR}/*.svg`);
  let successCount = 0;
  let skipCount = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const elements = extractSvgElements(raw);

    if (elements.length === 0) {
      console.log(`❌ Bỏ qua: ${path.basename(file)} (không tìm thấy SVG elements)`);
      skipCount++;
      continue;
    }

    const baseName = path.basename(file, '.svg');
    const componentName = createComponentName(baseName);

    const elementsCode = JSON.stringify(elements, null, 2)
      .replace(/"/g, "'")
      .replace(/\\'/g, "\\'");

    const tsxCode = `
      import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: '${componentName}',
        props: {
          size: [String, Number],
          color: String,
          viewBox: String,
        },
        setup(props: IIconProps, { attrs }) {
          return () =>
            useIconRender(
              ${elementsCode},
              props,
              attrs
            );
        },
      });
    `.trim();

    fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), tsxCode, 'utf8');
    console.log(`✅ Created: ${componentName}`);
    successCount++;
  }

  // index.ts
  const exportContent = files
    .map((file) => {
      const baseName = path.basename(file, '.svg');
      const componentName = createComponentName(baseName);
      return `export { default as ${componentName} } from './${componentName}';`;
    })
    .join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), exportContent);

  console.log('\n📊 Tổng kết:');
  console.log(`✅ Tạo thành công: ${successCount}`);
  console.log(`❌ Bỏ qua: ${skipCount}`);
  console.log('📦 index.ts đã được tạo');
}

generateIcons().catch(console.error);
