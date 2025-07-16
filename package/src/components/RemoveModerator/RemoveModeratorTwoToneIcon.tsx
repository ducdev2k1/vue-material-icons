import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'RemoveModeratorTwoToneIcon',
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
      'd': 'M6 11.09c0 4 2.55 7.7 6 8.83 1.17-.38 2.24-1.07 3.14-1.95L6 8.83zm6-6.95L8.34 5.51l9.02 9.02c.41-1.08.64-2.25.64-3.44v-4.7z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });