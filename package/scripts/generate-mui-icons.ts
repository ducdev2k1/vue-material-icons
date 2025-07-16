import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

const MUI_ICONS_DIR = path.resolve('node_modules/@mui/icons-material');
const OUTPUT_DIR = path.resolve('src/components/icons');

fs.ensureDirSync(OUTPUT_DIR);

function pascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, (m) => m.replace('-', '').toUpperCase()) + 'Icon';
}

function extractSvgPath(code: string): string | null {
  const match = code.match(/d:\s*["'`]([^"'`]+)["'`]/);
  return match?.[1] || null;
}

async function generateIcons() {
  const files = await glob(`${MUI_ICONS_DIR}/*.js`);

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const d = extractSvgPath(raw);
    if (!d) {
      console.log(`❌ Bỏ qua: ${file} (không tìm thấy path)`);
      continue;
    }

    const baseName = path.basename(file, '.js');
    const componentName = pascalCase(baseName);

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
        '${d}',
        props,
        attrs
      );
  },
});
`.trim();

    fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), tsxCode, 'utf8');
    console.log(`✅ Generated: ${componentName}`);
  }

  // Generate export index.ts
  const exportContent = files
    .map((file) => pascalCase(path.basename(file, '.js')))
    .map((name) => `export { default as ${name} } from './${name}';`)
    .join('\n');

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), exportContent);
  console.log('📦 index.ts created');
}

generateIcons().catch(console.error);
