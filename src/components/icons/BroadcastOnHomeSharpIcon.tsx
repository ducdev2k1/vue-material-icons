import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BroadcastOnHomeSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 9.76V4H4v2h16v2.59c.73.29 1.4.69 2 1.17M9 9H2v11h7zm-2 9H4v-7h3zm10.75-1.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25c0 .4.2.75.5.97V22h1.5z',
        props,
        attrs
      );
  },
});