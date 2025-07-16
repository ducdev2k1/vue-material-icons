import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'Filter5SharpIcon',
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
      'd': 'M23 1H5v18h18zm-2 16H7V3h14zM3 5H1v18h18v-2H3zm14 10V9h-4V7h4V5h-6v6h4v2h-4v2z'
    }
  }
],
              props,
              attrs
            );
        },
      });