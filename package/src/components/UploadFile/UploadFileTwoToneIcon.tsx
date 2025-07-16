import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadFileTwoToneIcon',
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
              d: 'M13 4H6v16h12V9h-5zm3 11h-3v4h-2v-4H8l4.01-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
