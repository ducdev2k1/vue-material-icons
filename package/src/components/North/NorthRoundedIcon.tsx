import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NorthRoundedIcon',
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
              d: 'M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 2.7a.996.996 0 0 0-1.41 0L5.71 8.29c-.39.39-.39 1.03 0 1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
