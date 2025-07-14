import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileCopySharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 1H2v16h2V3h12zm-1 4 6 6v12H6V5zm-1 7h5.5L14 6.5z',
        props,
        attrs
      );
  },
});