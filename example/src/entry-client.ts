import { createApp } from './main';
import { registerPlugins } from './plugins';

// stype
import 'ant-design-vue/dist/reset.css';

const { app } = createApp();

// use plugins
registerPlugins(app);

app.mount('#app');
