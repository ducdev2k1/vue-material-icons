import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CloudCircleTwoToneIcon',
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
              d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m4.08 12H8.5C6.57 16 5 14.43 5 12.5c0-1.8 1.36-3.29 3.12-3.48.73-1.4 2.19-2.36 3.88-2.36 2.12 0 3.89 1.51 4.29 3.52 1.52.1 2.71 1.35 2.71 2.89 0 1.62-1.31 2.93-2.92 2.93',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
