import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BatteryCharging30SharpIcon',
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
              d: 'M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
