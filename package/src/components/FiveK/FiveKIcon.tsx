import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FiveKIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 7.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H6.5v-1.5h3v-1h-3V9H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
