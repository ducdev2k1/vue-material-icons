import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SimCardAlertTwoToneIcon',
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
      'd': 'M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });