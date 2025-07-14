import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoFixNormalSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-1.59 2.83-4.24-4.24L1.59 18.17l4.24 4.24zm-4.2 1.38L12.8 9.8l1.38-1.38 1.41 1.41z',
        props,
        attrs
      );
  },
});