import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenshotMonitorTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 17h16V5H4zm11-2.5h2.5V12H19v4h-4zM5 6h4v1.5H6.5V10H5z',
        props,
        attrs
      );
  },
});