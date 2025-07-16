import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MedicationTwoToneIcon',
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
      'd': 'M7 19h10V8H7zm1-7h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15H8z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });