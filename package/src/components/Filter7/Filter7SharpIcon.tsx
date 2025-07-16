import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'Filter7SharpIcon',
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
      'd': 'M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-8-2 4-8V5h-6v2h4l-4 8z'
    }
  }
],
              props,
              attrs
            );
        },
      });