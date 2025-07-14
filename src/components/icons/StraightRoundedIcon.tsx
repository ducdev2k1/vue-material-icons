import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StraightRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm13 6.83.88.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.88-.87V20c0 .55.45 1 1 1s1-.45 1-1z',
        props,
        attrs
      );
  },
});