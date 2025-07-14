import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewComfyAltTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 18h16V6H4zm9-11h4v4h-4zm0 6h4v4h-4zM7 7h4v4H7zm0 6h4v4H7z',
        props,
        attrs
      );
  },
});