import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FestivalOutlinedIcon',
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
              d: 'M23 11V9c-6-2-11-7-11-7S7 7 1 9v2c0 1.49.93 2.75 2.24 3.26C3.2 16.76 2.92 19.69 2 22h20c-.92-2.31-1.2-5.24-1.24-7.74C22.07 13.75 23 12.49 23 11M12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71M13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11m-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5M6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11zm-1.34 9c.39-1.86.54-3.82.57-5.58.68-.15 1.29-.49 1.76-.98.25.25.54.45.85.62-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53.84-.08 1.61-.45 2.17-1.02.56.57 1.32.94 2.17 1.02.1 1.75.24 3.7.48 5.53zm7.32 0c-.27-1.94-.43-4.07-.52-5.93.31-.17.61-.37.85-.62.47.48 1.08.83 1.76.98.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
