import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageNotSupportedOutlinedIcon',
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
              d: 'm21.9 21.9-6.1-6.1-2.69-2.69L5 5 3.59 3.59 2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31zM5 19V7.83l6.84 6.84-.84 1.05L9 13l-3 4h8.17l2 2zM7.83 5l-2-2H19c1.1 0 2 .9 2 2v13.17l-2-2V5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
