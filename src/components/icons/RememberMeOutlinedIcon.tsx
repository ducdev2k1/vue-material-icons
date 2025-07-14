import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RememberMeOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 20H7v-1h10zm0-3H7v-.48c1.47-.99 3.22-1.52 5-1.52s3.53.53 5 1.52zm0-2.79c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10zM17 4H7V3h10z',
        props,
        attrs
      );
  },
});