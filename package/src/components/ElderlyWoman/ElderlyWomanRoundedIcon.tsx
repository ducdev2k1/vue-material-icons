import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElderlyWomanRoundedIcon',
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
              d: 'M18.52 11c-1.57 0-2.94-.9-3.6-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5L7 21c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2L11 19h2v3c0 .55.45 1 1 1s1-.45 1-1v-2.71c0-.22-.04-.43-.1-.64L13 13l.49-2.71c.81 1.23 2.05 2.14 3.51 2.52V13c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.79-.62-1.5-1.48-1.5M11.6 2.91c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
