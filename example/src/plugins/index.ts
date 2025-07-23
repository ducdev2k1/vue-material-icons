import type { App } from 'vue';
import router from '../router';

export const registerPlugins = (app: App) => {
  app.use(router);
};
