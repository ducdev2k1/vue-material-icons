import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnSharpRightRoundedIcon',
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
              d: 'm16 6.83-.88.88c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41l2.59-2.59c.39-.39 1.02-.39 1.41 0L20.3 6.3c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L18 6.83V13c0 1.1-.9 2-2 2H8v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-1.1.9-2 2-2h8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
