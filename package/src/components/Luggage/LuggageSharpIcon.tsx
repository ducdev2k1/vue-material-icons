import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LuggageSharpIcon',
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
              d: 'M19 6h-4V2H9v4H5v15h2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1h2zM9.5 18H8V9h1.5zm3.25 0h-1.5V9h1.5zm.75-12h-3V3.5h3zM16 18h-1.5V9H16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
