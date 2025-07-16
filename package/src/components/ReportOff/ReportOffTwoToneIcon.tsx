import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ReportOffTwoToneIcon',
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
      'd': 'M19 9.1 14.9 5H9.1l-.22.22L11 7.33V7h2v2.33l5.78 5.79.22-.22zM6.05 8.04 5 9.1v5.8L9.1 19h5.8l1.05-1.05zM13 16c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });