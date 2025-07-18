import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricRickshawOutlinedIcon',
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
              d: 'M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.41 1.16 1.51 2 2.82 2 1.66 0 3-1.34 3-3-.01-1.3-.85-2.4-2.01-2.82M6 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1-3.83c-.31-.11-.65-.17-1-.17-1.3 0-2.42.84-2.83 2H3v-3h4zM7 8H3V5h4zm7 5H9v-3h3V8H9V5h5zm2-6.88L18.4 9H16zM17.17 13H16v-2h3v.17c-.85.3-1.53.98-1.83 1.83M20 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7 20h4v-2l6 3h-4v2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
