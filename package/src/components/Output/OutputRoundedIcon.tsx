import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'OutputRoundedIcon',
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
      'd': 'm17.71 16.29 3.59-3.59c.39-.39.39-1.02 0-1.41L17.71 7.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L18.17 11H10c-.55 0-1 .45-1 1s.45 1 1 1h8.17l-1.88 1.88c-.39.39-.39 1.02 0 1.41s1.03.39 1.42 0'
    }
  }
],
              props,
              attrs
            );
        },
      });