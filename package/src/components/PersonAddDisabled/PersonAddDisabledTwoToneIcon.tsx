import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PersonAddDisabledTwoToneIcon',
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
      'd': 'M9 18h5.87L13 16.13l-1.1.3C9.89 16.99 9.08 17.76 9 18m8-10c0-1.1-.9-2-2-2-.99 0-1.81.72-1.97 1.67l2.31 2.31C16.27 9.82 17 8.99 17 8',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });