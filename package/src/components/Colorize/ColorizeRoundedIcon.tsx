import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColorizeRoundedIcon',
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
              d: 'm20.71 5.63-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.23-1.21c-.39-.39-1.02-.38-1.41 0-.39.39-.39 1.02 0 1.41l.72.72-8.77 8.77q-.15.15-.15.36v4.04c0 .28.22.5.5.5h4.04c.13 0 .26-.05.35-.15l8.77-8.77.72.72c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.22-1.22 3.12-3.12c.41-.4.41-1.03.02-1.42M6.92 19 5 17.08l8.06-8.06 1.92 1.92z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
