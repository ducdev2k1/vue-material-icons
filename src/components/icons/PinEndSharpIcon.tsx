import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PinEndSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 12V6H4v12h10v2H2V4h20v8zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83z',
        props,
        attrs
      );
  },
});