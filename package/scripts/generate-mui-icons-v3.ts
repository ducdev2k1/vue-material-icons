import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

const MUI_ICONS_DIR = path.resolve('node_modules/@mui/icons-material');
const OUTPUT_DIR = path.resolve('src/components');

fs.ensureDirSync(OUTPUT_DIR);

function pascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase()) + 'Icon';
}

function extractSvgElements(code: string): { tag: string; props: Record<string, any> }[] {
  const elements: { tag: string; props: Record<string, any> }[] = [];

  const createSvgIconMatch = code.match(
    /createSvgIcon\.default\)\((.*?)\s*,\s*['"`]([^'"`]+)['"`]\)/s,
  );
  if (!createSvgIconMatch) return elements;

  const svgContent = createSvgIconMatch[1];
  const jsxRegex = /_jsxRuntime\.jsx\)\("(\w+)",\s*\{([^}]*)\}/g;
  let match;

  while ((match = jsxRegex.exec(svgContent)) !== null) {
    const tag = match[1];
    const propsString = match[2];
    const props: Record<string, any> = {};

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

function extractGroupName(baseName: string) {
  // Loại bỏ hậu tố như Outlined, Rounded, Sharp, TwoTone
  return baseName.replace(/(Outlined|Rounded|Sharp|TwoTone)?$/, '');
}

async function generateIcons() {
  const files = await glob(`${MUI_ICONS_DIR}/*.js`);
  const groupMap: Record<string, string[]> = {};
  let successCount = 0;
  let skipCount = 0;
  const filesSkip: string[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const elements = extractSvgElements(raw);

    if (elements.length === 0) {
      console.log(`❌ Bỏ qua: ${path.basename(file)} (không tìm thấy SVG elements)`);
      skipCount++;
      filesSkip.push(file);
      continue;
    }

    const baseName = path.basename(file, '.js');
    const componentName = pascalCase(baseName);
    const groupName = extractGroupName(baseName);

    const groupDir = path.join(OUTPUT_DIR, groupName);
    fs.ensureDirSync(groupDir);

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

    fs.writeFileSync(path.join(groupDir, `${componentName}.tsx`), tsxCode, 'utf8');

    groupMap[groupName] ??= [];
    groupMap[groupName].push(componentName);
    console.log(`✅ Generated: ${componentName}`);
    successCount++;
  }

  // 👉 Tạo index.ts cho từng group
  for (const [groupName, components] of Object.entries(groupMap)) {
    const indexContent = components
      .map((name) => `export { default as ${name} } from './${name}';`)
      .join('\n');
    fs.writeFileSync(path.join(OUTPUT_DIR, groupName, 'index.ts'), indexContent, 'utf8');
  }

  // 👉 Tạo index.ts tổng ngoài src/components/icons
  const rootIndexContent = Object.keys(groupMap)
    .map((groupName) => `export * from './${groupName}';`)
    .join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), rootIndexContent, 'utf8');

  console.log('\n📊 Tổng kết:');
  console.log(`✅ Đã tạo thành công: ${successCount} icons`);
  console.log(`❌ Bỏ qua: ${skipCount} files`);
  console.log('❌ List file bỏ qua :>> ', filesSkip);
  console.log('📦 Các thư mục index.ts đã được tạo xong');
  console.log('📦 File index.ts tổng đã được tạo');
}

generateIcons().catch(console.error);
