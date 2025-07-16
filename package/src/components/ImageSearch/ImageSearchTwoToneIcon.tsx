import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ImageSearchTwoToneIcon',
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
      'd': 'M17.7 11.53c-.7.31-1.45.47-2.21.47C12.46 12 10 9.53 10 6.5c0-.17.01-.34.03-.5H4v14h14v-8.17zM5.5 18l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });