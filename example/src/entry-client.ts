// import { createApp } from './main';
// import { registerPlugins } from './plugins';

// stype

import 'ant-design-vue/dist/reset.css';
import { createApp } from './main';

const { app, router } = createApp();

// render the app into a div
router.isReady().then(() => {
  app.mount('#app');
});
