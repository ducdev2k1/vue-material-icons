import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'EmojiSymbolsOutlinedIcon',
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
      'd': 'M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.4036 9.1819 7.7782-7.7782 1.4142 1.4142-7.7782 7.7782z'
    }
  }
],
              props,
              attrs
            );
        },
      });