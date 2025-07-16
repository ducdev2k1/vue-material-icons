import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SwapHorizontalCircleTwoToneIcon',
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
      'd': 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m1 11H9v2.5L5.5 14 9 10.5V13h4zm2-1.5V11h-4V9h4V6.5l3.5 3.5z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });