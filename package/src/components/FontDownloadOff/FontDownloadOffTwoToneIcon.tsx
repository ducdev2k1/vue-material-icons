import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'FontDownloadOffTwoToneIcon',
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
      'd': 'M10.35 7.52 10.92 6h2.14l2.55 6.79L20 17.17V4H6.83zm2.23 2.23-.54-1.52h-.1l-.23.66zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });