import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'BreakfastDiningTwoToneIcon',
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
      'd': 'M18 5H6c-1.1 0-2 .9-2 2 0 .71.38 1.35 1.01 1.73l.99.58V19h12V9.3l1-.58c.63-.36 1-1.01 1-1.72 0-1.1-.9-2-2-2m-2.29 8.7-3 3c-.2.2-.45.3-.71.3s-.51-.1-.71-.29l-3-3a.996.996 0 0 1 0-1.41l3-3c.2-.2.45-.3.71-.3s.51.1.71.29l3 3c.39.39.39 1.02 0 1.41',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });