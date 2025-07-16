import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CollectionsBookmarkSharpIcon',
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
      'd': 'M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10-2.5-1.5L15 12V4h5z'
    }
  }
],
              props,
              attrs
            );
        },
      });