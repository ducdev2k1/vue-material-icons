import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeleteOutlineSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 21h12V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z',
        props,
        attrs
      );
  },
});