import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileUploadOffIcon',
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
              d: 'M21.19 21.19 2.81 2.81 1.39 4.22l4.7 4.69L5 10h2.17L9 11.83V16h4.17l2 2H5v2h12.17l2.61 2.61zM15 10h4l-7-7-3.09 3.09L15 12.17z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
