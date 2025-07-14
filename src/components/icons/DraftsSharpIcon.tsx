import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DraftsSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21.99 6.86 12 1 2 6.86V20h20zM12 13 3.74 7.84 12 3l8.26 4.84z',
        props,
        attrs
      );
  },
});