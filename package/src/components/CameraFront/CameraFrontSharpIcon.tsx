import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraFrontSharpIcon',
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
              d: 'M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8m7-8H5v18h14zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
