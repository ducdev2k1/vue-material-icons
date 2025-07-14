import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TwoKTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 3.5c0-.55.45-1 1-1h2v-1h-3V9H10c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H8v1h3V15H6.5z',
        props,
        attrs
      );
  },
});