import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NightsStayTwoToneIcon',
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
      'd': 'M8.1 14.15c1.67.48 2.9 2.02 2.9 3.85 0 .68-.19 1.31-.48 1.87.48.09.97.14 1.48.14 1.48 0 2.9-.41 4.13-1.15-2.62-.92-5.23-2.82-6.8-5.86-1.59-3.06-1.55-5.91-1.04-8.1-2.57 1.33-4.3 4.01-4.3 7.1h.02c1.65 0 3.17.83 4.09 2.15',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });