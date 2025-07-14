import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, loadEnv } from 'vite';
import { readFileEnv } from './ReadFileEnv';
import dts from 'vite-plugin-dts';

const root = process.cwd();

const env = loadEnv(process.env.NODE_ENV ?? 'ducnd', root);

// The boolean type read by loadEnv is a string. This function can be converted to boolean type
const viteEnv = readFileEnv(env);

const { VITE_PORT, VITE_DROP_CONSOLE, VITE_PUBLIC_PATH } = viteEnv;

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()


    dts({
     include: ['src/**/*.d.ts'], // Chỉ tạo .d.ts từ file .d.ts thủ công
        exclude: ['src/**/*.tsx'], // Loại trừ tự động tạo từ .tsx nếu không cần
        outDir: ['dist/types'],    // Thư mục output cho .d.ts
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
      fileName: (format) => `vue-material-icon.${format}.js`,
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
    sourcemap: true, // Tạo sourcemap để debug
    minify: 'esbuild', // Sử dụng esbuild để xử lý TypeScript
    target: 'esnext', // Đầu ra JS hiện đại
  },
});
