import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, loadEnv } from 'vite';
import { readFileEnv } from './ReadFileEnv';

const root = process.cwd();

const env = loadEnv(process.env.NODE_ENV ?? 'ducnd', root);

// The boolean type read by loadEnv is a string. This function can be converted to boolean type
const viteEnv = readFileEnv(env);

const { VITE_PORT, VITE_DROP_CONSOLE, VITE_PUBLIC_PATH } = viteEnv;

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
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
      name: 'VMaterialIcon',
      formats: ['es', 'umd'],
      fileName: (format) => `v-material-icon.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // Đặt tên file CSS
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'v-material-icon.css';
          }
          return '[name].[ext]';
        },
      },
    },
    cssCodeSplit: true, // tách riêng CSS
    sourcemap: true, // Tạo sourcemap để debug
    minify: 'esbuild', // Sử dụng esbuild để xử lý TypeScript
    target: 'esnext', // Đầu ra JS hiện đại
  },
});
