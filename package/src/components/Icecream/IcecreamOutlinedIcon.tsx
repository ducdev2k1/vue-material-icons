import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IcecreamOutlinedIcon',
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
              d: 'M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24C4.08 6.81 3 8.29 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76m-6.33 12.39-2.73-5.21c.83.37 1.74.58 2.68.58.95 0 1.88-.21 2.72-.6zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42c-.71.44-1.53.68-2.39.68s-1.68-.24-2.39-.69l-.66-.41-.56.54c-.38.35-.87.56-1.39.56-1.1 0-2-.89-2-2 0-.98.72-1.82 1.68-1.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
