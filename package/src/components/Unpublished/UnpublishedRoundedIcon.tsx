import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnpublishedRoundedIcon',
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
              d: 'M20.49 20.49 3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.56 1.56c-1.25 1.88-1.88 4.21-1.59 6.7.53 4.54 4.21 8.22 8.74 8.74 2.49.29 4.81-.34 6.7-1.59l1.56 1.56c.39.39 1.02.39 1.41 0 .4-.38.4-1.01.01-1.4m-10.61-4.6-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12.18-.18L12.17 15l-.88.88c-.39.4-1.02.4-1.41.01m3.71-5.13-7.1-7.1c1.88-1.25 4.21-1.88 6.7-1.59 4.54.53 8.22 4.21 8.74 8.74.29 2.49-.34 4.82-1.59 6.7L15 12.17l1.94-1.94c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
