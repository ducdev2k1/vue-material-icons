import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RailwayAlertTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 16.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V13H4zm6-2.5c.83 0 1.5.67 1.5 1.5S10.83 17 10 17s-1.5-.67-1.5-1.5S9.17 14 10 14M4.43 6H11c0-.33.03-.66.08-.98-3.37-.1-5.75.21-6.65.98',
        props,
        attrs
      );
  },
});