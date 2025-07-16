import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellularConnectedNoInternet3BarOutlinedIcon',
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
              d: 'M22 8V2L2 22h16V8h4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
