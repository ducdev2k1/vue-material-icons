import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CollectionsTwoToneIcon',
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
      'd': 'M8 16h12V4H8zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });