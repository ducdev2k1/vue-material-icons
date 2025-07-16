import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SignpostTwoToneIcon',
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
      'd': 'M6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });