import { useIconRender } from '@/utils/IconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconHome',
  props: {
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
  setup(props, { attrs }) {
    const pathD = 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'; // home icon path từ Material Icons
    return () => useIconRender(pathD, props, attrs);
  },
});
