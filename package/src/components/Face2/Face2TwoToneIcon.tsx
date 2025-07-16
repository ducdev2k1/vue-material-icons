import type { IIconProps } from '@/utils/useIconRender';
      import { useIconRender } from '@/utils/useIconRender';
      import { defineComponent } from 'vue';

      export default defineComponent({
        name: 'Face2TwoToneIcon',
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
      'd': 'M6.02 5H6C3.79 5 2 6.79 2 9c0 .55.12 1.07.32 1.54.57-2.25 1.9-4.19 3.7-5.54m9.08-1.5C14.36 2.59 13.25 2 12 2s-2.36.59-3.1 1.5c.98-.32 2.02-.5 3.1-.5s2.12.18 3.1.5M12 5.31c0 2.24 1.82 4.06 4.06 4.06.93 0 1.82-.32 2.53-.89-1.43-2.09-3.84-3.47-6.56-3.48-.01.11-.03.21-.03.31M2.5 16.12c-.31.56-.5 1.19-.5 1.88 0 2.21 1.79 4 4 4 .44 0 .85-.07 1.25-.2-2.23-1.21-3.94-3.24-4.75-5.68m19.18-5.58c.2-.47.32-.99.32-1.54 0-2.21-1.79-4-4-4h-.02c1.8 1.35 3.13 3.29 3.7 5.54M16.75 21.8c.4.13.81.2 1.25.2 2.21 0 4-1.79 4-4 0-.69-.19-1.32-.5-1.88-.81 2.44-2.52 4.47-4.75 5.68',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });