import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SmartButtonTwoToneIcon',
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
              d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
