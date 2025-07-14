import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Looks3SharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21 3H3.01v18H21zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01z',
        props,
        attrs
      );
  },
});