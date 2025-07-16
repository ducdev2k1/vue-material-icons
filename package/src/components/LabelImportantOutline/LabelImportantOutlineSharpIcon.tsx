import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'LabelImportantOutlineSharpIcon',
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
      'd': 'M16.03 19H3l4.5-7L3 5h13.03L21 12zM6.5 17H15l3.5-5L15 7H6.5l3.5 5z'
    }
  }
],
              props,
              attrs
            );
        },
      });