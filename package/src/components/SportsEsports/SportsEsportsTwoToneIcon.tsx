import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsEsportsTwoToneIcon',
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
      'd': 'M16.53 7H7.47c-.99 0-1.84.74-1.98 1.72L4.4 16.37c-.03.21.05.35.13.44.07.09.2.19.41.19.15 0 .29-.06.39-.16L8.17 14h7.66l2.84 2.84c.1.1.24.16.39.16.21 0 .34-.1.42-.19s.16-.23.13-.44l-1.09-7.66c-.15-.97-1-1.71-1.99-1.71M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });