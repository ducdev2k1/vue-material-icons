import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheaterComedyOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4z',
        props,
        attrs
      );
  },
});