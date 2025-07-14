import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PolicyTwoToneIcon',
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
              d: 'M5 6.3V11c0 4.52 2.98 8.69 7 9.93 1.74-.53 3.28-1.62 4.47-3.04l-1.72-1.72c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l1.45 1.45C18.49 14.65 19 12.85 19 11V6.3l-7-3.11z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
