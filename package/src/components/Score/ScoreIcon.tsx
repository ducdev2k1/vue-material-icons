import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScoreIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
