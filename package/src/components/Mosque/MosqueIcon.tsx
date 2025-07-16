import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MosqueIcon',
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
      'd': 'M7 8h10c.29 0 .57.06.84.13.09-.33.16-.67.16-1.04 0-1.31-.65-2.53-1.74-3.25L12 1 7.74 3.84C6.65 4.56 6 5.78 6 7.09c0 .37.07.71.16 1.04.27-.07.55-.13.84-.13'
    }
  }
],
              props,
              attrs
            );
        },
      });