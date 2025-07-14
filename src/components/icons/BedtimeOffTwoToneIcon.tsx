import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BedtimeOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7.95 5.13 9.03 6.2c.05-.55.12-1.12.24-1.71-.46.17-.9.39-1.32.64M5.13 7.96C4.42 9.15 4 10.52 4 12c0 4.41 3.59 8 8 8 1.45 0 2.84-.4 4.05-1.12z',
        props,
        attrs
      );
  },
});