import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExpandLessRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11.29 8.71 6.7 13.3c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0',
        props,
        attrs
      );
  },
});