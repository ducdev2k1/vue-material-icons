import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'CameraTwoToneIcon',
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
      'd': 'M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13zm-1.04-.21 2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7M8.54 12 5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9zm-3.46 0 2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });