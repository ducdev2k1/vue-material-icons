import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayLessonSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 11c.34 0 .67.03 1 .08V2H3v20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M7 11V4h5v7L9.5 9.5z',
        props,
        attrs
      );
  },
});