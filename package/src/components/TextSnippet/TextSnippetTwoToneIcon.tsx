import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TextSnippetTwoToneIcon',
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
      'd': 'M14.17 5 19 9.83V19H5V5zM7 15h10v2H7zm0-4h10v2H7zm0-4h7v2H7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });