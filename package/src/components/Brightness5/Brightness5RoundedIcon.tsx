import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Brightness5RoundedIcon',
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
              d: 'm20 15.31 2.6-2.6c.39-.39.39-1.02 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6c-.39.39-.39 1.02 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
