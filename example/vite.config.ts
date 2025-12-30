import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import path from 'path';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, type Plugin } from 'vite';

/**
 * Plugin tự động copy server.js vào dist sau khi build
 */
const copyServerPlugin = (): Plugin => {
  return {
    name: 'copy-server',
    closeBundle() {
      const srcPath = path.resolve(__dirname, 'server.js');
      const destPath = path.resolve(__dirname, 'dist/server.js');

      // Đảm bảo thư mục dist tồn tại
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      // Copy server.js vào dist
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('✅ Copied server.js to dist/server.js');
      } else {
        console.warn('⚠️ server.js not found, skipping copy');
      }
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    copyServerPlugin(),
  ],
  ssr: {
    noExternal: ['ant-design-vue', '@ant-design/icons-vue', '@ant-design/icons-svg'], // ⚠️ Quan trọng khi dùng SSR
  },
  base: '/',
  resolve: {
    alias: {
      '@': 'src',
    },
  },
});
