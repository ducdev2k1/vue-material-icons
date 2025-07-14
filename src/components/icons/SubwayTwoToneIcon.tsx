import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubwayTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10.67 18.5 9.17 20h5.66l-1.5-1.5zm6.4-13.84C15.59 4.08 13.68 4 12 4s-3.59.08-5.07.66C5.01 5.41 4 6.86 4 8.86V20h3.5v-.38l1.15-1.16C7.16 18.29 6 17.04 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3v6.5c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20H20V8.86c0-2-1.01-3.45-2.93-4.2',
        props,
        attrs
      );
  },
});