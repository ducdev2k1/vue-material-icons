import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BalconyTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 16H5v4h2zm4 0H9v4h2zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10m4 2H8v-2h2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92M16 12h-2v-2h2zm-1 4h-2v4h2zm4 0h-2v4h2z',
        props,
        attrs
      );
  },
});