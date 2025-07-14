import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeUpAltRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm13 5.41.88.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 2.29a.996.996 0 0 0-1.41 0L8.71 4.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.88-.88v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9z',
        props,
        attrs
      );
  },
});