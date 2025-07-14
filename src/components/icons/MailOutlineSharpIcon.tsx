import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MailOutlineSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 4H2.01L2 20h20zm-2 14H4V8l8 5 8-5zm-8-7L4 6h16z',
        props,
        attrs
      );
  },
});