import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageNotSupportedSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm21.9 21.9-8.49-8.49L3 3l-.9-.9L.69 3.51 3 5.83V21h15.17l2.31 2.31zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3zm16 .17L5.83 3H21z',
        props,
        attrs
      );
  },
});