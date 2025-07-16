import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PageviewTwoToneIcon',
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
      'd': 'M4 18h16V6H4zm7.5-11c2.49 0 4.5 2.01 4.5 4.5 0 .88-.26 1.69-.7 2.39l2.44 2.43-1.42 1.42-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });