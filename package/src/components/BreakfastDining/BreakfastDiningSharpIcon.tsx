import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BreakfastDiningSharpIcon',
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
              d: 'M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45c1.36-.79 2.23-2.36 1.95-4.11C21.63 4.38 19.83 3 17.85 3m-1.44 10L12 17.42 7.59 13 12 8.59z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
