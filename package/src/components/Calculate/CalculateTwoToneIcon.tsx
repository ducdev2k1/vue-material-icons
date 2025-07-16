import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CalculateTwoToneIcon',
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
      'd': 'M5 19h14V5H5zm8.03-11.94L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zM13 13.25h5v1.5h-5zm0 2.5h5v1.5h-5zM6.25 7.72h5v1.5h-5zM6 14.5h2v-2h1.5v2h2V16h-2v2H8v-2H6z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });