import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PestControlRodentTwoToneIcon',
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
      'd': 'M17.65 14.75c.22-.37.35-.79.35-1.25 0-1.38-1.12-2.5-2.5-2.5-1.3 0-2.5 1.08-2.5 2.5 0 .69.28 1.32.73 1.77l-1.41 1.41C11.5 15.87 11 14.74 11 13.5c0-.92.28-1.76.75-2.47-.22.01-.44.02-.67.07-1.48.32-2.68 1.53-2.99 3.01-.26 1.24.02 2.45.8 3.41.77.94 1.9 1.48 3.11 1.48h6.53c.81 0 1.47-.66 1.47-1.47 0-.41-.17-.81-.48-1.09zM17 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });