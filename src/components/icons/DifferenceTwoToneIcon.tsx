import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DifferenceTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14.17 3H8v14h11V7.83zm2.33 12h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z',
        props,
        attrs
      );
  },
});