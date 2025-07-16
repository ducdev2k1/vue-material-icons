import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PaddingTwoToneIcon',
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
      'd': 'M5 19h14V5H5zM15 7h2v2h-2zm-4 0h2v2h-2zM7 7h2v2H7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });