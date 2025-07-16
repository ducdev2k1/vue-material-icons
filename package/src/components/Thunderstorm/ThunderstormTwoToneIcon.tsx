import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ThunderstormTwoToneIcon',
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
      'd': 'm17.73 9.01-1.53-.14-.25-1.52C15.63 5.44 13.94 4 12 4c-1.44 0-2.77.78-3.48 2.04l-.49.87-.99.13C5.31 7.27 4 8.76 4 10.5 4 12.43 5.57 14 7.5 14h10c1.38 0 2.5-1.12 2.5-2.5 0-1.28-.99-2.37-2.27-2.49',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });