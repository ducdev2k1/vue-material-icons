import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnRightRoundedIcon',
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
              d: 'M16.29 13.29c.39.39 1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41L17.7 6.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.88.89H9c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1v-8h8.17l-.88.88c-.39.39-.39 1.02 0 1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
