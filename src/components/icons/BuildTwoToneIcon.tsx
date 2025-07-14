import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BuildTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11.92 8.28c.24-1.4-.16-2.89-1.24-3.96-.94-.95-2.2-1.39-3.44-1.32l3.09 3.09-4.24 4.24L3 7.24c-.07 1.24.37 2.49 1.31 3.44 1.04 1.04 2.47 1.45 3.83 1.25.71-.1 1.4-.38 2-.82l9.46 9.46.88-.88-9.45-9.45c.47-.6.77-1.26.89-1.96',
        props,
        attrs
      );
  },
});