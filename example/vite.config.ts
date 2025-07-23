import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

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
