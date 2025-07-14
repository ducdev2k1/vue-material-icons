import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalWifiConnectedNoInternet2TwoToneIcon',
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
    'tag': 'path',
    'props': {
      'fillOpacity': '.3',
      'd': 'M18.31 12h2.67L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10c2.35 0 4.52.74 6.31 2'
    }
  }
],
        props,
        attrs
      );
  },
});