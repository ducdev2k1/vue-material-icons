import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HdrAutoSelectIcon',
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
              d: 'M10 16H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm6.5-4.5H13v6h1.5v-2h1.1l.9 2H18l-.9-2.1c.5-.3.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5m0 2.5h-2v-1h2zm-13-.5h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm18.5.5v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
