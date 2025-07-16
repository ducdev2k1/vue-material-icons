import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TrolleyIcon',
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
      'd': 'M21 14v2H4V4H2V2h4v12zM5.99 17C4.89 17 4 17.9 4 19s.89 2 1.99 2C7.1 21 8 20.1 8 19s-.9-2-2.01-2m13 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2S21 20.1 21 19s-.9-2-2.01-2M13 13H7V7h6zm7 0h-6V7h6z'
    }
  }
],
              props,
              attrs
            );
        },
      });