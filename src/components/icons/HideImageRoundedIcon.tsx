import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HideImageRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 3H5.83L21 18.17V5c0-1.1-.9-2-2-2m-15.49.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM7 17c-.41 0-.65-.47-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l.82-1.1 2.1 2.1z',
        props,
        attrs
      );
  },
});