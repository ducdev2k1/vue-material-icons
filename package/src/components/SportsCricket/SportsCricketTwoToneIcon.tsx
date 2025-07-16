import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SportsCricketTwoToneIcon',
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
      'd': 'm4.414 7.8394 1.4213-1.4213 7.0852 7.0853-1.4213 1.4212z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });