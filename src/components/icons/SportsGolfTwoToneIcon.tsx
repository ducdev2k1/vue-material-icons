import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsGolfTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m2-7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
        props,
        attrs
      );
  },
});