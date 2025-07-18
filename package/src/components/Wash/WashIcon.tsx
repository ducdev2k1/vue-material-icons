import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WashIcon',
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
              d: 'M18.5 8C19.88 8 21 6.88 21 5.5 21 3.83 18.5 1 18.5 1S16 3.83 16 5.5C16 6.88 17.12 8 18.5 8m-5 1c.83 0 1.5-.67 1.5-1.5 0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5M9.12 5l-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25S19.44 10 18.75 10H8.86c.64-1.11 1.48-2.58 1.49-2.61.09-.16.14-.33.14-.53 0-.26-.09-.5-.26-.7C10.22 6.12 9.12 5 9.12 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
