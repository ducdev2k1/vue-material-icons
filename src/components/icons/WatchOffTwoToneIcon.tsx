import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WatchOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13.89 5.27 13.51 4h-3.02l-.38 1.27c1.82-.51 3.23-.16 3.78 0m-3.78 13.46.38 1.27h3.02l.38-1.27c-1.82.51-3.23.16-3.78 0',
        props,
        attrs
      );
  },
});