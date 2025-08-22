import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForumTwoToneIcon',
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
              d: 'M15 11V4H4v8.17L5.17 11H6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4zm-12-.83V4h11v7H5.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
