import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StormOutlinedIcon',
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
              d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
