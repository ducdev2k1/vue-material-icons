import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PentagonRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm2.47 10.42 3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12c.86 0 1.63-.55 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8c-.69-.48-1.61-.48-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28',
        props,
        attrs
      );
  },
});