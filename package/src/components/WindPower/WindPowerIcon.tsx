import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WindPowerIcon',
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
              d: 'M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm10.73-8.39c.75.23 1.3.78 1.57 1.46l4.27-7.11c.65-1.08.3-2.48-.78-3.13-.87-.52-1.99-.41-2.73.29l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1m-3.12 1.66c.16-.52.48-.96.89-1.27H3.28C2.02 11 1 12.02 1 13.28c0 1.02.67 1.91 1.65 2.19l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61c-.77-.62-1.13-1.67-.82-2.67m11.6 6.34-2.28-4.1c-.27-.48-.73-.83-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99-.32 1.06-1.28 1.77-2.39 1.77-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0 .72-.72.88-1.83.38-2.72',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
