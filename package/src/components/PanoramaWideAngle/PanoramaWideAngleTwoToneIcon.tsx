import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'PanoramaWideAngleTwoToneIcon',
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
      'd': 'M12 6c-2.45 0-4.71.2-7.29.64C4.24 8.42 4 10.22 4 12s.24 3.58.71 5.36c2.58.44 4.84.64 7.29.64s4.71-.2 7.29-.64c.47-1.78.71-3.58.71-5.36s-.24-3.58-.71-5.36C16.71 6.2 14.45 6 12 6',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });