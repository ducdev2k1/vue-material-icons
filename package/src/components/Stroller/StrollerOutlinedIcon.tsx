import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StrollerOutlinedIcon',
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
              d: 'M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m9-9.34L9.6 15H15zM18.65 3C20.52 3 22 4.56 22 6.48V7h-2v-.52C20 5.66 19.42 5 18.65 5c-.68 0-1.07.59-1.65 1.27V15c0 1.1-.9 2-2 2H7.43c-.85 0-1.31-1-.76-1.65l8.8-10.32C16.11 4.27 16.99 3 18.65 3M10 5c-.65 0-1.29.09-1.91.27l1.4 1.4 1.37-1.61C10.58 5.02 10.29 5 10 5m0-2c1.56 0 3.03.4 4.3 1.1L9.6 9.61 4.72 4.72C6.21 3.64 8.03 3 10 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
