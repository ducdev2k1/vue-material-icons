import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LuggageTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 8v11h10V8zm2.5 10H8V9h1.5zm3.25 0h-1.5V9h1.5zM16 18h-1.5V9H16z',
        props,
        attrs
      );
  },
});