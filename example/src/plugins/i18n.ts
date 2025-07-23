import messages from '@intlify/unplugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'vi',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const t = i18n.global.t;
