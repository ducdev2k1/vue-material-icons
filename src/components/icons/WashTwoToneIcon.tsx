import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WashTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3zm8.5-14.5c-.55 0-1-.45-1-1 0-.4.43-1.22 1-2.05.57.83 1 1.65 1 2.05 0 .55-.45 1-1 1',
        props,
        attrs
      );
  },
});