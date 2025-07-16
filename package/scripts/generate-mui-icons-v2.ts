import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

const MUI_ICONS_DIR = path.resolve('node_modules/@mui/icons-material');
const OUTPUT_DIR = path.resolve('src/components/icons');

fs.ensureDirSync(OUTPUT_DIR);

function pascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase()) + 'Icon';
}

function extractSvgElements(code: string): { tag: string; props: Record<string, any> }[] {
  const elements: { tag: string; props: Record<string, any> }[] = [];

  // Tìm createSvgIcon call
  const createSvgIconMatch = code.match(
    /createSvgIcon\.default\)\((.*?)\s*,\s*['"`]([^'"`]+)['"`]\)/s,
  );
  if (!createSvgIconMatch) {
    return elements;
  }

  const svgContent = createSvgIconMatch[1];

  // Parse tất cả _jsxRuntime.jsx calls
  const jsxRegex = /_jsxRuntime\.jsx\)\("(\w+)",\s*\{([^}]*)\}/g;
  let match;

  while ((match = jsxRegex.exec(svgContent)) !== null) {
    const tag = match[1];
    const propsString = match[2];

    const props: Record<string, any> = {};

    // Parse props từ object literal - cải thiện regex
    const propRegex = /(\w+):\s*"([^"]*)"/g;
    let propMatch;

    while ((propMatch = propRegex.exec(propsString)) !== null) {
      const propName = propMatch[1];
      const propValue = propMatch[2];
      props[propName] = propValue;
    }

    if (Object.keys(props).length > 0) {
      elements.push({ tag, props });
    }
  }

  return elements;
}

async function generateIcons() {
  const files = await glob(`${MUI_ICONS_DIR}/*.js`);
  let successCount = 0;
  let skipCount = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const elements = extractSvgElements(raw);

    // Debug: in ra nội dung file đầu tiên để kiểm tra
    if (files.indexOf(file) === 0) {
      console.log('🔍 Debug - Nội dung file đầu tiên:');
      console.log(raw.substring(0, 500) + '...');
      console.log('Elements found:', elements);
    }

    if (elements.length === 0) {
      console.log(`❌ Bỏ qua: ${path.basename(file)} (không tìm thấy SVG elements)`);
      skipCount++;
      continue;
    }

    const baseName = path.basename(file, '.js');
    const componentName = pascalCase(baseName);

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
    console.log(`✅ Generated: ${componentName}`);
    successCount++;
  }

  // Generate export index.ts
  const exportContent = files
    .map((file) => {
      const baseName = path.basename(file, '.js');
      const componentName = pascalCase(baseName);
      return `export { default as ${componentName} } from './${componentName}';`;
    })
    .join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), exportContent);

  console.log('\n📊 Tổng kết:');
  console.log(`✅ Đã tạo thành công: ${successCount} icons`);
  console.log(`❌ Bỏ qua: ${skipCount} files`);
  console.log('📦 index.ts created');
}

generateIcons().catch(console.error);
