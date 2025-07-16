import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'NearMeTwoToneIcon',
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
      'd': 'm11.39 12.61.32.83 1.32 3.42 4.24-10.13-10.13 4.24 3.42 1.33z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });