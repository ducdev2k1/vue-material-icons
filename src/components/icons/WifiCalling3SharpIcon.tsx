import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiCalling3SharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.49 3c-2.21 0-4.21.9-5.66 2.34l1.06 1.06c1.18-1.18 2.8-1.91 4.59-1.91s3.42.73 4.59 1.91l1.06-1.06C20.7 3.9 18.7 3 16.49 3',
        props,
        attrs
      );
  },
});