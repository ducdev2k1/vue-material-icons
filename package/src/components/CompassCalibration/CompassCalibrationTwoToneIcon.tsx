import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CompassCalibrationTwoToneIcon',
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
      'd': 'm4.94 7.26 2.21 2.21c1.44-.91 3.11-1.4 4.85-1.4s3.41.49 4.84 1.4l2.21-2.21C17 5.79 14.56 5 12 5s-5.01.79-7.06 2.26',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });