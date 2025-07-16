import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'TerminalTwoToneIcon',
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
      'd': 'M4 18h16V8H4zm8-3h6v2h-6zm-5.91-4.59L7.5 9l4 4-4 4-1.41-1.41L8.67 13z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });