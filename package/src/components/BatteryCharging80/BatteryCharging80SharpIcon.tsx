import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BatteryCharging80SharpIcon',
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
              d: 'M17 4h-3V2h-4v2H7v5h4.93L13 7v2h4V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 12.5h2L11 20v-5.5H9L11.93 9H7v13h10V9h-4v3.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
