import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InterpreterModeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15.52 15.01C15.35 15 15.18 15 15 15c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18h7.17c-.43-.74-.77-1.76-.65-2.99M13 8c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2',
        props,
        attrs
      );
  },
});