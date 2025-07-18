import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PresentToAllSharpIcon',
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
              d: 'M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
