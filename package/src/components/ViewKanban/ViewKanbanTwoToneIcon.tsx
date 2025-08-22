import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewKanbanTwoToneIcon',
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
              d: 'M5 19h14V5H5zM15 7h2v8h-2zm-4 0h2v5h-2zM7 7h2v10H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
