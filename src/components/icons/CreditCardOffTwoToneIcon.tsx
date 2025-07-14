import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreditCardOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 17.17V12h-5.17zM10.83 8H20V6H8.83zM4 6.83V8h1.17zM15.17 18l-6-6H4v6z',
        props,
        attrs
      );
  },
});