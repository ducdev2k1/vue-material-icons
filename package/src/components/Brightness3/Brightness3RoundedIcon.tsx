import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Brightness3RoundedIcon',
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
              d: 'M8.93 2h-.14c-.83.02-1.09 1.12-.39 1.56 2.78 1.77 4.63 4.89 4.63 8.44s-1.84 6.66-4.62 8.43c-.71.46-.43 1.55.41 1.57h.21c6.05 0 10.86-5.39 9.87-11.63-.76-4.84-5.07-8.42-9.97-8.37',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
