import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TsunamiTwoToneIcon',
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
      'd': 'M4.04 14c.47-.24.68-.41 1.3-.87 2 1.48 3.07 1.39 3.79 1.32C8.4 13.27 8 11.92 8 10.5c0-1.67.54-3.21 1.47-4.46C6.41 7.52 4.3 10.46 4.04 14',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });