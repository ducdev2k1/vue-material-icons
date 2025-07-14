import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AnimationTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 12c-.63.84-1 1.88-1 3 0 2.76 2.24 5 5 5 1.12 0 2.16-.37 3-1-3.87 0-7-3.13-7-7m10-8c-1.13 0-2.16.37-3 1 3.87.01 7 3.14 7 7 .63-.84 1-1.88 1-3 0-2.76-2.24-5-5-5',
        props,
        attrs
      );
  },
});