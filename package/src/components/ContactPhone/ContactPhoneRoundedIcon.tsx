import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactPhoneRoundedIcon',
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
              d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.39c.16 0 .3.07.4.2l1.1 1.45c.15.2.13.48-.05.65l-1.36 1.36c-.18.18-.48.2-.67.04a7.557 7.557 0 0 1-2.38-3.71c-.18-.63-.28-1.3-.28-1.99s.1-1.36.28-2c.41-1.47 1.25-2.75 2.38-3.71.2-.17.49-.14.67.04l1.36 1.36c.18.18.2.46.05.65l-1.1 1.45c-.09.13-.24.2-.4.2h-1.39c-.22.63-.35 1.3-.35 2s.13 1.38.35 2.01',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
