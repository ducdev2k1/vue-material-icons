import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'ImageNotSupportedTwoToneIcon',
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
      'd': 'M7.83 5H19v11.17zm8.34 14-2-2H6l3-4 2 2.72.84-1.05L5 7.83V19z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });