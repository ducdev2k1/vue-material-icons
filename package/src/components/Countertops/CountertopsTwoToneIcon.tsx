import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CountertopsTwoToneIcon',
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
      'd': 'M6 6h2v2H6zm0 12v-6h5v6zm12 0h-5v-6h5z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });