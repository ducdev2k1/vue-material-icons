import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'AirlineSeatFlatAngledTwoToneIcon',
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
      'd': 'm14 16.64-4-1.45V17h4zM6 8.5c.15 0 .3-.03.44-.1.49-.24.7-.84.46-1.34-.19-.41-.59-.56-.9-.56-.15 0-.3.03-.44.1-.32.16-.45.42-.5.56-.05.15-.12.44.04.77.2.42.59.57.9.57m13.16 2.52-6.69-2.41-.7 1.91 8.59 3.11.01-.02c.19-.51.17-1.05-.06-1.53-.23-.5-.63-.87-1.15-1.06',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });