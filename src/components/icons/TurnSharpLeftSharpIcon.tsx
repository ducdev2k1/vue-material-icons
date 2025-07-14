import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnSharpLeftSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h10v8h-2v-6H6z',
        props,
        attrs
      );
  },
});