import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'JoinInnerOutlinedIcon',
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
    'tag': 'ellipse',
    'props': {
      'cx': '12',
      'cy': '12',
      'rx': '3',
      'ry': '5.74'
    }
  }
],
              props,
              attrs
            );
        },
      });