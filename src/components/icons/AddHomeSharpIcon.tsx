import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 11c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7',
        props,
        attrs
      );
  },
});