import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardControlKeyIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z',
        props,
        attrs
      );
  },
});