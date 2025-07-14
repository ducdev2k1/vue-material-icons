import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BatteryCharging20SharpIcon',
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
              d: 'M11 20v-3H7v5h10v-5h-4.4L11 20z',
            },
          },
          {
            tag: 'path',
            props: {
              fillOpacity: '.3',
              d: 'M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17V4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
