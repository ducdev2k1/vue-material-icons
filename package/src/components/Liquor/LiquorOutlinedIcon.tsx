import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LiquorOutlinedIcon',
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
              d: 'M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3zm2-6h2v3H5zm0 5h2v1c0 .55-.45 1-1 1s-1-.45-1-1zm15.64-4.46-.96-.32c-.41-.14-.68-.52-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.27.81-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9M16 4h1v1h-1zm4 16h-7v-2h7zm0-4h-7v-2h7zm0-4h-7v-1.56l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28c0 1.29.82 2.44 2.05 2.85l.95.31z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
