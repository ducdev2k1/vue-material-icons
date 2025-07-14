import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodaySharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zM7 10h5v5H7z',
        props,
        attrs
      );
  },
});