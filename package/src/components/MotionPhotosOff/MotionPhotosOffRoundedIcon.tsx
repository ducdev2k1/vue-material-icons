import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MotionPhotosOffRoundedIcon',
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
              d: 'M12 6c-.92 0-1.8.22-2.58.59l7.99 7.99c.37-.78.59-1.66.59-2.58 0-3.31-2.69-6-6-6M2.1 3.51c-.39.39-.39 1.03 0 1.42l1.56 1.56c-1.25 1.88-1.88 4.21-1.59 6.7.52 4.54 4.21 8.23 8.75 8.75 2.49.28 4.81-.34 6.69-1.59l1.56 1.56c.39.39 1.03.39 1.42 0s.39-1.02 0-1.41L3.51 3.51c-.38-.38-1.02-.39-1.41 0M12 20c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l1.47 1.47C6.22 10.2 6 11.08 6 12c0 3.31 2.69 6 6 6 .92 0 1.8-.22 2.58-.59l1.47 1.47C14.86 19.59 13.48 20 12 20',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
