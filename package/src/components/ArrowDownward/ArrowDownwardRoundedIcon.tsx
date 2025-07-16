import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ArrowDownwardRoundedIcon',
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
      'd': 'M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0s-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1'
    }
  }
],
              props,
              attrs
            );
        },
      });