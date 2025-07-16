import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DriveFolderUploadTwoToneIcon',
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
              d: 'M9.17 6H4v12h16V8h-8.83zM16 13h-3v4h-2v-4H8l4.01-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
