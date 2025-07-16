import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MasksTwoToneIcon',
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
      'd': 'M14.34 8.78C13.52 8.33 12.93 8 12 8s-1.52.33-2.34.77c-.71.39-1.54.85-2.66 1.08v1.65c0 2.76 2.24 5 5 5s5-2.24 5-5V9.85c-1.12-.23-1.95-.69-2.66-1.07m.66 2.47c-.75-.21-1.26-.51-1.71-.78-.46-.27-.8-.47-1.29-.47s-.84.2-1.31.48c-.44.26-.96.56-1.69.76V10.2c.48-.17.84-.38 1.18-.58C10.72 9.3 11.23 9 12 9s1.27.3 1.8.62c.34.2.71.42 1.2.59z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });