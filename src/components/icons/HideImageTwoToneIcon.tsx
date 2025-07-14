import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HideImageTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm16.17 19-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5 19 16.17V5z',
        props,
        attrs
      );
  },
});