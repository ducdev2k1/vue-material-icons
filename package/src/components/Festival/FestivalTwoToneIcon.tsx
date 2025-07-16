import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'FestivalTwoToneIcon',
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
    'tag': 'path',
    'props': {
      'd': 'M5.24 14.42c-.04 1.76-.18 3.72-.58 5.58h2.67c.27-1.94.43-4.07.52-5.93-.31-.17-.6-.37-.85-.63-.47.49-1.08.83-1.76.98M11 11H8c0 .83.67 1.5 1.5 1.5S11 11.83 11 11m-5 0H3c0 .83.67 1.5 1.5 1.5S6 11.83 6 11m6-6.29C10.67 5.85 8.51 7.55 5.89 9h12.23C15.49 7.55 13.33 5.85 12 4.71m7.5 7.79c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5m-5 0c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5m2.5.94c-.25.25-.54.45-.85.62.1 1.87.26 4 .52 5.93h2.67c-.39-1.86-.54-3.82-.57-5.58-.69-.14-1.3-.48-1.77-.97',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });