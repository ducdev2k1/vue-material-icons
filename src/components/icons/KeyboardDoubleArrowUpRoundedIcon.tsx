import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardDoubleArrowUpRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6.7 18.29c.39.39 1.02.39 1.41 0L12 14.42l3.88 3.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 12.3a.996.996 0 0 0-1.41 0L6.7 16.88c-.39.39-.39 1.02 0 1.41',
        props,
        attrs
      );
  },
});