import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ApiTwoToneIcon',
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
      'd': 'm14 12-2 2-2-2 2-2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5z'
    }
  }
],
              props,
              attrs
            );
        },
      });