import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BatteryCharging60SharpIcon',
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
              d: 'M17 4h-3V2h-4v2H7v7h3.87L13 7v4h4V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v11h10V11h-4v1.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
