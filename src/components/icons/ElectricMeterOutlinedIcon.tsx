import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricMeterOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21 11c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.92 2.51 7.24 6 8.48V22h2v-2.06c.33.04.66.06 1 .06s.67-.02 1-.06V22h2v-2.52c3.49-1.24 6-4.56 6-8.48m-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
        props,
        attrs
      );
  },
});