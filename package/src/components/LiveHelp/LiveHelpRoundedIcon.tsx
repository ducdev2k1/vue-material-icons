import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LiveHelpRoundedIcon',
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
              d: 'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 16h-2v-2h2zm2.07-7.75-.9.92c-.58.59-.99 1.1-1.12 2.06-.06.43-.41.76-.85.76h-.31c-.52 0-.92-.46-.85-.98.11-.91.53-1.72 1.14-2.34l1.24-1.26c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.87 0-1.62.57-1.89 1.35-.13.37-.44.64-.83.64h-.3c-.58 0-.98-.56-.82-1.12C8.65 5.21 10.18 4 12 4c2.21 0 4 1.79 4 4 0 .88-.36 1.68-.93 2.25',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
