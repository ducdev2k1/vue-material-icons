import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'GolfCourseTwoToneIcon',
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
    'tag': 'circle',
    'props': {
      'cx': '19.5',
      'cy': '19.5',
      'r': '1.5',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });