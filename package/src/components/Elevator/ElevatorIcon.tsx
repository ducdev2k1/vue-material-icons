import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ElevatorIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 6c.69 0 1.25.56 1.25 1.25S9.19 8.5 8.5 8.5s-1.25-.56-1.25-1.25S7.81 6 8.5 6m2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2zm4.5 3L13 13h5zM13 11l2.5-4 2.5 4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
