import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NineKTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 4.5h3v-1h-2c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1H10c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H6.5z',
        props,
        attrs
      );
  },
});