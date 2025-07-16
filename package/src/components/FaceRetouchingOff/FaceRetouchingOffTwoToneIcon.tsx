import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'FaceRetouchingOffTwoToneIcon',
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
      'd': 'M12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4M4.42 9.47c.67-.38 1.28-.86 1.81-1.41l-.72-.72c-.46.65-.83 1.36-1.09 2.13',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });