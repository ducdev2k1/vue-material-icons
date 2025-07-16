import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MedicationLiquidTwoToneIcon',
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
    'tag': 'defs',
    'props': {
      'id': 'a',
      'd': 'M4 8h10v11H4z',
      'opacity': '.3'
    }
  },
  {
    'tag': 'use',
    'props': {
      'xlinkHref': '#a',
      'overflow': 'visible'
    }
  },
  {
    'tag': 'path',
    'props': {
      'd': 'M4 19h10V8H4zm1-7h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5z'
    }
  }
],
              props,
              attrs
            );
        },
      });