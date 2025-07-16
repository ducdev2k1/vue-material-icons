import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'Filter4SharpIcon',
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
      'd': 'M3 5H1v18h18v-2H3zm12 10h2V5h-2v4h-2V5h-2v6h4zm8-14H5v18h18zm-2 16H7V3h14z'
    }
  }
],
              props,
              attrs
            );
        },
      });