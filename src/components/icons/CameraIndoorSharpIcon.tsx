import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraIndoorSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 3 4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z',
        props,
        attrs
      );
  },
});