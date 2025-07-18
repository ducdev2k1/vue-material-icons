import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DryIcon',
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
              d: 'm15.65 4.86-.07-.07c-.57-.62-.82-1.41-.67-2.2L15 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71m4 0-.07-.07c-.57-.62-.82-1.41-.67-2.2L19 2h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71M9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25S19.44 10 18.75 10H8.86c.64-1.11 1.48-2.58 1.49-2.61.09-.16.14-.33.14-.53 0-.26-.09-.5-.26-.7C10.22 6.12 9.12 5 9.12 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
