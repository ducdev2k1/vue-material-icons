import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'EmergencyShareTwoToneIcon',
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
      'd': 'M12 11c-1.94 0-4 1.45-4 4.15 0 .94.55 2.93 4 6.17 3.45-3.24 4-5.23 4-6.17 0-2.7-2.06-4.15-4-4.15m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });