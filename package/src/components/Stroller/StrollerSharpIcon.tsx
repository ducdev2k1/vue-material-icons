import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StrollerSharpIcon',
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
              d: 'M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L5.27 17H17V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7zm-7.7-2.9C13.03 3.4 11.56 3 10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
