import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwipeLeftRoundedIcon',
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
              d: 'M3.5 4.02V2.75c0-.41-.34-.75-.75-.75S2 2.34 2 2.75V6c0 .55.45 1 1 1h3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.09c2.11-1.86 4.88-3 7.91-3 4.42 0 7.27 2.19 8.25 4.1.12.25.38.4.66.4.56 0 .93-.59.67-1.08C20.3 3.39 16.81 1 12 1 8.78 1 5.82 2.13 3.5 4.02m1.7 13.41c0-.65.6-1.13 1.24-.99l3.56.8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29c-.18-.18-.28-.43-.28-.69',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
