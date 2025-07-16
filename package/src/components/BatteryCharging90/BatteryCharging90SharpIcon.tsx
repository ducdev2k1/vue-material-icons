import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BatteryCharging90SharpIcon',
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
              fillOpacity: '.3',
              d: 'M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
