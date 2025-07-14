import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TtyTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4.13 5c.17 1.37.53 2.71 1.05 3.99l1.65-1.65L6.36 5zm11.53 11.17-1.65 1.65c1.28.52 2.63.87 3.99 1.05v-2.23z',
        props,
        attrs
      );
  },
});