import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VignetteOutlinedIcon',
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
              d: 'M21 5v14H3V5zm0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 5c3.25 0 6 1.83 6 4s-2.75 4-6 4-6-1.83-6-4 2.75-4 6-4m0-2c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
