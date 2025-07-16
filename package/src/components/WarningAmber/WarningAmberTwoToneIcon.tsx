import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'WarningAmberTwoToneIcon',
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
      'd': 'M1 21h22L12 2zm3.47-2L12 5.99 19.53 19zM11 16h2v2h-2zm0-6h2v4h-2z'
    }
  }
],
              props,
              attrs
            );
        },
      });