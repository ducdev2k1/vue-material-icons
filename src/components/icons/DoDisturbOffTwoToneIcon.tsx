import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoDisturbOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c-1.41 0-2.73.37-3.88 1.01l6 5.99H17v2h-.88L19 15.88c.63-1.15 1-2.47 1-3.88 0-4.41-3.59-8-8-8m0 16c1.56 0 3-.45 4.23-1.23L10.46 13H7v-2h1.46L5.23 7.77C4.45 9 4 10.44 4 12c0 4.41 3.59 8 8 8',
        props,
        attrs
      );
  },
});