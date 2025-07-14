import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotDisturbOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 13v-2h1.17L5.12 7.94C4.41 9.14 4 10.52 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12L10.17 13zm5-9c-1.48 0-2.86.41-4.06 1.12L13.83 11H17v2h-1.17l3.06 3.06c.7-1.2 1.11-2.58 1.11-4.06 0-4.41-3.59-8-8-8',
        props,
        attrs
      );
  },
});