import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

export const readFileEnv = (envConf: any) => {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (e: unknown) {
        console.error(e);
        realName = '';
      }
    }
    ret[envName] = realName;
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
};

const root = process.cwd();

const env = loadEnv(process.env.NODE_ENV ?? 'ducnd', root);

// The boolean type read by loadEnv is a string. This function can be converted to boolean type
const viteEnv = readFileEnv(env);

const { VITE_PORT, VITE_DROP_CONSOLE, VITE_PUBLIC_PATH } = viteEnv;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      rollupTypes: true,
    }),
  ],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  base: VITE_PUBLIC_PATH,
  root,
  server: {
    host: true,
    port: VITE_PORT,
    strictPort: true,
    hmr: { clientPort: VITE_PORT },
  },
  esbuild: {
    pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'VueMaterialIcons',
      formats: ['es', 'cjs'],
      fileName: (format) => `vue-material-icons.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // Đặt tên file CSS
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'vue-material-icon.css';
          }
          return '[name].[ext]';
        },
      },
    },
    cssCodeSplit: true, // tách riêng CSS
    // sourcemap: true, // Tạo sourcemap để debug
    minify: 'esbuild', // Sử dụng esbuild để xử lý TypeScript
    target: 'esnext', // Đầu ra JS hiện đại
  },
});
