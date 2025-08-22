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
          {
            tag: 'path',
            props: {
              d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M8 15h3v4h2v-4h3l-3.99-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
