import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'KeyboardAltTwoToneIcon',
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
      'd': 'M3 19h18V6H3zM17 8h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM9 8h2v2H9zm0 4h2v2H9zm-1 4h8v1H8zM5 8h2v2H5zm0 4h2v2H5z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });