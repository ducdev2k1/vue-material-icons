import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EastRoundedIcon',
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
              d: 'M14.29 5.71c-.39.39-.39 1.02 0 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l5.59-5.59c.39-.39.39-1.02 0-1.41l-5.6-5.58c-.38-.39-1.02-.39-1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
