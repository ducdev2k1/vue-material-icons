import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PestControlIcon',
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
              d: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-8 2h-2v-6h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
