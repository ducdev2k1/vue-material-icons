import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CropOriginalSharpIcon',
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
              d: 'M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
