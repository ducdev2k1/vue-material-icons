import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CancelScheduleSendTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm3 17.97 6.1-2.61c.02-.14.04-.29.07-.43L3 15.75zM16.5 11c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5m2.47 7.27-.71.71-1.77-1.77-1.77 1.77-.71-.71 1.77-1.77-1.77-1.77.71-.71 1.77 1.77 1.77-1.77.71.71-1.77 1.77zM3 8.25l7.52 1-7.51-3.22z',
        props,
        attrs
      );
  },
});