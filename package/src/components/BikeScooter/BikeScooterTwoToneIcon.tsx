import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BikeScooterTwoToneIcon',
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
              d: 'M10 14h.74L8.82 5.56C8.61 4.65 7.8 4 6.87 4H3v2h3.87l1.42 6.25h-.01c-2.16.65-3.81 2.48-4.19 4.75H0v2h6v-1c0-2.21 1.79-4 4-4m9-6h-.82l-1.35-3.69C16.55 3.52 15.8 3 14.96 3H11v2h3.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5C24 10.2 21.8 8 19 8m0 8c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
