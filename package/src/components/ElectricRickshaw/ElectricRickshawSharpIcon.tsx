import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElectricRickshawSharpIcon',
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
              d: 'M21 11.18V9l-5-6H1v12h2.18C3.6 16.16 4.7 17 6 17s2.4-.84 2.82-2h8.37c.48 1.34 1.86 2.25 3.42 1.94 1.16-.23 2.11-1.17 2.33-2.33.31-1.56-.6-2.95-1.94-3.43M18.4 9H16V6.12zM3 5h4v4H3zm3 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m3-2v-2h3V9H9V5h5v8zm11 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7 20h4v-2l6 3h-4v2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
