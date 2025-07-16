import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PermMediaTwoToneIcon',
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
      'd': 'm13.17 6-.59-.59L11.17 4H6v12h16V6zm4.33 4.5L21 15H7l4.5-6 3.5 4.51z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });