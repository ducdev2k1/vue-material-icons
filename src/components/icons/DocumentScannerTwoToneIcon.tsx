import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DocumentScannerTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 6v12h10V6zm8 10H9v-2h6zm0-3H9v-2h6zm0-3H9V8h6z',
        props,
        attrs
      );
  },
});