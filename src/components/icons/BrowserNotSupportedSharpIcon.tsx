import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrowserNotSupportedSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27zM15 18H5V7.64L15.36 18z',
        props,
        attrs
      );
  },
});