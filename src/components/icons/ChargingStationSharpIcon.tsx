import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChargingStationSharpIcon',
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
              d: 'm14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
