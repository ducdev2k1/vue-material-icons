import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScheduleSendTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm5 10.5 6 1.5-6 1.5v3.49l5.39-2.27c.6-1.73 1.86-3.16 3.48-3.97L5 7.01z',
        props,
        attrs
      );
  },
});