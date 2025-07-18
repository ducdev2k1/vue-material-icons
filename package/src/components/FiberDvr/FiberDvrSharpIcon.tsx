import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FiberDvrSharpIcon',
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
              d: 'M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM23 3H1v18h22zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5zM21 12.9h-.9L21 15h-1.5l-.85-2H17.5v2H16V9h5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
