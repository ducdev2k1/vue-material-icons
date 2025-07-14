import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoneySharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14 16h5V8h-5zm2-6h1v4h-1zm-8 6h5V8H8zm2-6h1v4h-1zM5 8h2v8H5zM2 4v16h20V4zm18 14H4V6h16z',
        props,
        attrs
      );
  },
});