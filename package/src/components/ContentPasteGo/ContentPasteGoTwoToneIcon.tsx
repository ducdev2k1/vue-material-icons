import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentPasteGoTwoToneIcon',
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
              d: 'M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
