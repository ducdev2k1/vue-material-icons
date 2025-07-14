import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckBoxTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 19h14V5H5zm2.41-7.4 2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01z',
        props,
        attrs
      );
  },
});