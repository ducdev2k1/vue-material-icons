import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiFindSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11 14c0-3.36 2.64-6 6-6 2.2 0 4.08 1.13 5.13 2.86L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21l1.86-1.87C12.14 18.09 11 16.2 11 14',
        props,
        attrs
      );
  },
});