import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BroadcastOnPersonalSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17 8c.7 0 1.38.1 2.02.27L12 3 4 9v12h6.76C9.66 19.63 9 17.89 9 16c0-4.42 3.58-8 8-8m0 6.75c-.69 0-1.25.56-1.25 1.25 0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25',
        props,
        attrs
      );
  },
});