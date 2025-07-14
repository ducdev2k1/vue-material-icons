import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnfoldMoreRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 3.7a.996.996 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zm0 12.34-2.46-2.46a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z',
        props,
        attrs
      );
  },
});