import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirplaneTicketTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4.01 8.54C5.2 9.23 6 10.52 6 12c0 1.47-.81 2.77-2 3.46V18h16V6H4zm4.13 3.99 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65c.51-.14 1.04.17 1.18.68.13.51-.17 1.04-.69 1.19l-8.86 2.36-1.66-2.88z',
        props,
        attrs
      );
  },
});