import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LiquorTwoToneIcon',
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
      'd': 'M16 4h1v1h-1zM6 15c.55 0 1-.45 1-1v-1H5v1c0 .55.45 1 1 1m7-1h7v2h-7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });