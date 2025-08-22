import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalWifiStatusbarConnectedNoInternet2TwoToneIcon',
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
              d: 'M17 11.21V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10c1.8 0 3.5.44 5 1.21',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M4.23 13.22 12 21l5-5.01v-4.78c-1.5-.77-3.2-1.21-5-1.21-3.03 0-5.78 1.23-7.77 3.22M19 18h2v2h-2zm0-8h2v6h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
