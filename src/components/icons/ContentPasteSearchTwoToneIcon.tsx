import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentPasteSearchTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 16.5c0-3.58 2.92-6.5 6.5-6.5.89 0 1.73.18 2.5.5V5h-2v3H7V5H5v14h5.5c-.32-.77-.5-1.61-.5-2.5',
        props,
        attrs
      );
  },
});