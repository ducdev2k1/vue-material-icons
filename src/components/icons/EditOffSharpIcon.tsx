import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditOffSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm21.41 6.33-3.75-3.75-2.53 2.54 3.75 3.75zM1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zm16.42 5.72-3.75-3.75-2.52 2.52 3.75 3.75z',
        props,
        attrs
      );
  },
});