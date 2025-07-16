import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'SupervisedUserCircleTwoToneIcon',
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
      'cx': '9.5',
      'cy': '10',
      'r': '1',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });