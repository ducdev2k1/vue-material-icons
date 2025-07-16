import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SosSharpIcon',
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
      'd': 'M15.5 7h-7v10h7zm-2 8h-3V9h3zM1 15h4v-2H1V7h6v2H3v2h4v6H1zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6z'
    }
  }
],
              props,
              attrs
            );
        },
      });