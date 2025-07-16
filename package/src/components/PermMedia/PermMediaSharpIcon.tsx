import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PermMediaSharpIcon',
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
      'd': 'M2 6H0v16h20v-2H2zm22-2H14l-2-2H4v16h20zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15z'
    }
  }
],
              props,
              attrs
            );
        },
      });