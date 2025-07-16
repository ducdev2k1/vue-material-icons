import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'FolderZipTwoToneIcon',
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
      'd': 'M16 16h2v-2h-2v-2h2v-2h-2V8h4v10h-4zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });