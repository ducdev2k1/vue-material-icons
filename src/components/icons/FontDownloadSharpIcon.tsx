import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FontDownloadSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.93 13.5h4.14L12 7.98zM22 2H2v20h20zm-6.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z',
        props,
        attrs
      );
  },
});