import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TranscribeOutlinedIcon',
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
            tag: 'path',
            props: {
              d: 'M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56C1.61 16.07 1 17.1 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 19H3v-.78c0-.38.2-.72.52-.88C4.71 16.73 6.63 16 9 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm2.93-3 1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74L17.93 2c-3.9 3.89-3.91 9.95 0 14m4.99-5.05c-.84-1.18-.84-2.71 0-3.89l-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
