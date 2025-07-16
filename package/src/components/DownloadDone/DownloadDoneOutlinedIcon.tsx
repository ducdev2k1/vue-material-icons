import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DownloadDoneOutlinedIcon',
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
              d: 'M5 18h14v2H5zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
