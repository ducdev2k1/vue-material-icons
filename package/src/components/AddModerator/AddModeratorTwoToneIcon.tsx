import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'AddModeratorTwoToneIcon',
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
      'd': 'M12 4.14 6 6.39v4.7c0 3.33 1.76 6.44 4.33 8.04-1.56-4.89 2.5-9.8 7.67-9.05V6.39z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });