import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';

export async function render(url: string) {
  const { app, router, i18n } = createApp();

  // set the router to the desired URL before rendering
  router.push(url);
  await router.isReady();


  // Set locale
  const locale = url.split("/")[1];
  if (locale === "vi" || locale === "en") {
      i18n.global.locale.value = locale;
  }

  const ctx = {};
  const html = await renderToString(app, ctx);

  return { html, locale };
}
