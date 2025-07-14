import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BallotTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 14h3v3H7zm0-7h3v3H7zM5 19h14V5H5zm8-11.5h5v2h-5zm0 7h5v2h-5zM6 6h5v5H6zm0 7h5v5H6z',
        props,
        attrs
      );
  },
});