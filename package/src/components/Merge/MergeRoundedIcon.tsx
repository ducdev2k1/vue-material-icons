import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MergeRoundedIcon',
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
              d: 'M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59c.39-.39 1.02-.39 1.41 0L15.3 6.3c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-4.88 4.88c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88c-.39.39-1.02.39-1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
