import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AttachEmailRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3zm-9.47.67c-.32.2-.74.2-1.06 0L3.4 6.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L11 9l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z',
        props,
        attrs
      );
  },
});