import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Face2RoundedIcon',
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
              d: 'M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6q-.39 0-.78.06C16.19 1.23 14.24 0 12 0S7.81 1.23 6.78 3.06Q6.39 3 6 3C2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04C.79 14.62 0 16.22 0 18c0 3.31 2.69 6 6 6 1.39 0 2.67-.48 3.69-1.28.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28 3.31 0 6-2.69 6-6 0-1.78-.79-3.38-2.03-4.48M12 21c-4.41 0-8-3.59-8-8 0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06 1.26 0 2.45-.39 3.45-1.09.31.86.49 1.77.49 2.72 0 4.41-3.59 8-8 8',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
