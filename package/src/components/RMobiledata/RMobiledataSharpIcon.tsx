import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'RMobiledataSharpIcon',
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
      'd': 'M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h7v5.2zM7 4H4v1.33h3z'
    }
  }
],
              props,
              attrs
            );
        },
      });