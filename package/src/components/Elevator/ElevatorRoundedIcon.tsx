import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElevatorRoundedIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 6c.69 0 1.25.56 1.25 1.25S9.19 8.5 8.5 8.5s-1.25-.56-1.25-1.25S7.81 6 8.5 6m2.5 7c0 .55-.45 1-1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c-.55 0-1-.45-1-1v-1.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2zm6.52.76-1.6 2.56c-.2.31-.65.31-.85 0l-1.6-2.56c-.2-.33.04-.76.43-.76h3.2c.39 0 .63.43.42.76M17.1 11h-3.2c-.39 0-.63-.43-.42-.77l1.6-2.56c.2-.31.65-.31.85 0l1.6 2.56c.2.34-.04.77-.43.77',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
