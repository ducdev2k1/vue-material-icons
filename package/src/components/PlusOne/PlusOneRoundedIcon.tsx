import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlusOneRoundedIcon',
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
              d: 'M9 8c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V9c0-.55-.45-1-1-1m5.5-1.21c0 .57.52 1 1.08.89L17 7.4V17c0 .55.45 1 1 1s1-.45 1-1V6.27c0-.65-.6-1.12-1.23-.97l-2.57.62c-.41.09-.7.46-.7.87',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
