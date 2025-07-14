import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SdStorageSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z',
        props,
        attrs
      );
  },
});