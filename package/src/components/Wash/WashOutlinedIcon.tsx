import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WashOutlinedIcon',
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
              d: 'M20.75 16c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3zm3.5-12c.83 0 1.5-.67 1.5-1.5 0-.84-1.5-2.5-1.5-2.5S12 6.66 12 7.5c0 .83.67 1.5 1.5 1.5m5-8S16 3.83 16 5.5C16 6.88 17.12 8 18.5 8S21 6.88 21 5.5C21 3.83 18.5 1 18.5 1m0 5.5c-.55 0-1-.45-1-1 0-.4.43-1.22 1-2.05.57.83 1 1.65 1 2.05 0 .55-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
