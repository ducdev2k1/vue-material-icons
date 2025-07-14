import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FontDownloadTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 20h16V4H4zm7.07-14.5h1.86l5.11 13h-2.09l-1.14-3H9.17l-1.12 3H5.96zM12 7.98 9.93 13.5h4.14z',
        props,
        attrs
      );
  },
});