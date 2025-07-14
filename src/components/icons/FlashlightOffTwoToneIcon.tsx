import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlashlightOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 7H9.83L14 11.17v-.77l2-3.01zm-6 5.83V20h4v-3.17zM16 5V4H6.83l1 1z',
        props,
        attrs
      );
  },
});