import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElevatorTwoToneIcon',
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
              d: 'M19 5v14H5V5zm-9 13v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5c.69 0 1.25-.56 1.25-1.25S9.19 6 8.5 6s-1.25.56-1.25 1.25S7.81 8.5 8.5 8.5M18 11l-2.5-4-2.5 4zm-5 2 2.5 4 2.5-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4zM8.5 8.5c.69 0 1.25-.56 1.25-1.25S9.19 6 8.5 6s-1.25.56-1.25 1.25S7.81 8.5 8.5 8.5M18 11l-2.5-4-2.5 4zm-5 2 2.5 4 2.5-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
