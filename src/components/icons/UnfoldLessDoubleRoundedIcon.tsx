import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnfoldLessDoubleRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm14.46 5.7-2.47 2.46L9.53 5.7c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0',
        props,
        attrs
      );
  },
});