import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PersonRemoveAlt1TwoToneIcon',
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
      'd': 'M10 16c2.69 0 5.77 1.28 6 2H4c.2-.71 3.3-2 6-2',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });