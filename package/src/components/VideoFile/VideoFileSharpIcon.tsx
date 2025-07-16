import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'VideoFileSharpIcon',
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
      'd': 'M14 2H4v20h16V8zm-1 7V3.5L18.5 9zm1 5 2-1.06v4.12L14 16v2H8v-6h6z'
    }
  }
],
              props,
              attrs
            );
        },
      });