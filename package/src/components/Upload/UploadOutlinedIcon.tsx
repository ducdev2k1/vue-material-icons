import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadOutlinedIcon',
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
              d: 'M9 16h6v-6h4l-7-7-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
