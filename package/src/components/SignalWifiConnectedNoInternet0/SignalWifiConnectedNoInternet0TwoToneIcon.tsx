import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalWifiConnectedNoInternet0TwoToneIcon',
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
              d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
