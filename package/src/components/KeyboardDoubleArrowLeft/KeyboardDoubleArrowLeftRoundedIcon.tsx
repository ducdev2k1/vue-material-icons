import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'KeyboardDoubleArrowLeftRoundedIcon',
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
      'd': 'M18.29 17.29c.39-.39.39-1.02 0-1.41L14.42 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L12.3 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01'
    }
  }
],
              props,
              attrs
            );
        },
      });