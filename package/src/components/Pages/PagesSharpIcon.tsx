import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PagesSharpIcon',
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
      'd': 'M3 3v8h5L7 7l4 1V3zm5 10H3v8h8v-5l-4 1zm9 4-4-1v5h8v-8h-5zm4-14h-8v5l4-1-1 4h5z'
    }
  }
],
              props,
              attrs
            );
        },
      });