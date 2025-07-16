import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'MmsTwoToneIcon',
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
      'd': 'M4 17.17 5.17 16H20V4H4zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });