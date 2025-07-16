import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ParaglidingTwoToneIcon',
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
      'd': 'M21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.66.57 9 1.58z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });