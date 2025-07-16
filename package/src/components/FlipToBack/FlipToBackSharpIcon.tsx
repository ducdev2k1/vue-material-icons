import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'FlipToBackSharpIcon',
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
      'd': 'M9 7H7v2h2zm0 4H7v2h2zm4 4h-2v2h2zm0-12h-2v2h2zM9 3H7v2h2zm12 0h-2v2h2zm0 12h-2v2h2zM9 15H7v2h2zm10-2h2v-2h-2zm0-4h2V7h-2zM5 7H3v14h14v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z'
    }
  }
],
              props,
              attrs
            );
        },
      });