import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrunchDiningTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 10h-2v1.47c0 .95.37 1.89 1.03 2.6.63-.71.97-1.61.97-2.56z',
        props,
        attrs
      );
  },
});