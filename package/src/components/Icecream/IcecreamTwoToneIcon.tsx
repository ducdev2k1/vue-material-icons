import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'IcecreamTwoToneIcon',
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
      'd': 'm9.32 13.42 2.73 5.21 2.67-5.23c-.84.39-1.77.6-2.72.6-.94 0-1.85-.21-2.68-.58m7.99-5.4-.77-.12-.06-.78C16.29 4.8 14.34 3 12 3S7.71 4.8 7.51 7.12l-.06.78-.77.13C5.72 8.18 5 9.02 5 10c0 1.11.9 2 2 2 .52 0 1.01-.21 1.39-.56l.56-.54.66.41c.71.45 1.53.69 2.39.69s1.68-.24 2.39-.68l.66-.42.56.54c.38.36.87.56 1.39.56 1.1 0 2-.9 2-2 0-.99-.72-1.82-1.69-1.98',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });