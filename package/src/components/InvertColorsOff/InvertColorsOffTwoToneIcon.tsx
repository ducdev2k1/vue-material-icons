import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'InvertColorsOffTwoToneIcon',
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
      'd': 'M12 14.83V19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28zm0-10.02v4.37l-2.2-2.2z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });