import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnSharpLeftRoundedIcon',
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
              d: 'm8 6.83.88.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L7.71 3.71a.996.996 0 0 0-1.41 0L3.71 6.29c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L6 6.83V13c0 1.1.9 2 2 2h8v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2H8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
