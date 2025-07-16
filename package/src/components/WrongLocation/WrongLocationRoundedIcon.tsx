import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'WrongLocationRoundedIcon',
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
      'd': 'm20.42 4.5 1.38-1.38c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L19 3.08 17.62 1.7c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.38 1.38-1.38 1.38c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L19 5.92l1.38 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z'
    }
  }
],
              props,
              attrs
            );
        },
      });