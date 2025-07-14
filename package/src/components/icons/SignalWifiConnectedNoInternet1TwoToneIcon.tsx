import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalWifiConnectedNoInternet1TwoToneIcon',
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
      'd': 'M12 12h8.99L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36C7.79 13.89 9.79 13 12 13z'
    }
  }
],
        props,
        attrs
      );
  },
});