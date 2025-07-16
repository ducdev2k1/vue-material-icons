import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'HotelClassTwoToneIcon',
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
      'd': 'm11 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L11 14.79l-2.42 1.84.93-3.01L7.24 12h2.82z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });