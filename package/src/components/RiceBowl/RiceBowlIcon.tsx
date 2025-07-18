import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RiceBowlIcon',
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
              d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25m-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92m-6-7.74V12h-4V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26M4 12c0-2.95 1.61-5.53 4-6.92V12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
