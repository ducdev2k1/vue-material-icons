import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FitnessCenterRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'm20.57 14.86.72-.72c.39-.39.39-1.02 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0L17 15.57 8.43 7l2.86-2.86c.39-.39.39-1.02 0-1.41l-.02-.02a.996.996 0 0 0-1.41 0l-.72.72-.72-.72c-.39-.39-1.03-.39-1.42 0L5.57 4.14l-.72-.72c-.39-.39-1.04-.39-1.43 0s-.39 1.04 0 1.43l.72.72L2.71 7c-.39.39-.39 1.02 0 1.41l.72.72-.72.73c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0L7 8.43 15.57 17l-2.86 2.86c-.39.39-.39 1.02 0 1.41l.02.02c.39.39 1.02.39 1.41 0l.72-.72.72.72c.39.39 1.02.39 1.41 0l1.43-1.43.72.72c.39.39 1.04.39 1.43 0s.39-1.04 0-1.43l-.72-.72L21.29 17c.39-.39.39-1.02 0-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
