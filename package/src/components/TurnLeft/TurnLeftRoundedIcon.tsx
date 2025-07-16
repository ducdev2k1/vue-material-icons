import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnLeftRoundedIcon',
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
              d: 'M7.71 13.29c-.39.39-1.02.39-1.41 0L3.71 10.7a.996.996 0 0 1 0-1.41L6.3 6.7c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L6.83 9H15c1.1 0 2 .9 2 2v8c0 .55-.45 1-1 1s-1-.45-1-1v-8H6.83l.88.88c.39.39.39 1.02 0 1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
