import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesktopAccessDisabledSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M1.41 1.69 0 3.1l1 .99V18h9v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h2.44V2z',
        props,
        attrs
      );
  },
});