import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NoTransferTwoToneIcon',
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
      'd': 'M14.83 12H18v3.17zm-5.66 0 5 5H6.63l-.29-.27C6.21 16.62 6 16.37 6 16v-4zm.83 2.5c0-.83-.67-1.5-1.5-1.5S7 13.67 7 14.5 7.67 16 8.5 16s1.5-.67 1.5-1.5M7.82 4.99h9.83C17.11 4.46 15.69 4 12 4c-2.4 0-3.83.2-4.69.48z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });