import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AssistantPhotoTwoToneIcon',
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
              d: 'm14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
