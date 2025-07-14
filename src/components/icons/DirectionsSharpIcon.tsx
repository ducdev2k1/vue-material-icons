import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22.41 12 12 1.59 1.59 11.99 12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z',
        props,
        attrs
      );
  },
});