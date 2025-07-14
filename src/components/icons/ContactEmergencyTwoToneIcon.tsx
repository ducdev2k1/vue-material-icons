import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactEmergencyTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M2 19h.08c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4H22V5H2zM15.03 8.15l.75-1.3 1.47.85V6h1.5v1.7l1.47-.85.75 1.3L19.5 9l1.47.85-.75 1.3-1.47-.85V12h-1.5v-1.7l-1.47.85-.75-1.3L16.5 9zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3',
        props,
        attrs
      );
  },
});