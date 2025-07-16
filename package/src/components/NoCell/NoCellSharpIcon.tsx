import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NoCellSharpIcon',
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
      'd': 'M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6 5 2.17V1h14v15.17l-2-2V6z'
    }
  }
],
              props,
              attrs
            );
        },
      });