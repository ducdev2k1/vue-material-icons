import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SatelliteTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
  {
    'tag': 'path',
    'props': {
      'd': 'M5 19h14V5H5zM6 6h2.57c0 1.42-1.15 2.58-2.57 2.58zm0 4.29c2.37 0 4.28-1.93 4.28-4.29H12c0 3.31-2.68 6-6 6zm3 2.86 2.14 2.58 3-3.86L18 17H6z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});