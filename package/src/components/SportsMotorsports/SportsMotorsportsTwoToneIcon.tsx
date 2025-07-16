import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsMotorsportsTwoToneIcon',
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
      'd': 'M13.56 6c-.15 0-.29 0-.44.01-1.45.1-2.72.43-3.82.99l2.5 1.06c1.33.57 2.2 1.87 2.2 3.32 0 1.99-1.62 3.61-3.61 3.61H4.24C4.01 16.28 4 17.19 4 17.2v.8h10c1.68 0 3.3-.71 4.44-1.96 1.15-1.27 1.7-2.91 1.54-4.63C19.69 8.37 16.87 6 13.56 6',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });