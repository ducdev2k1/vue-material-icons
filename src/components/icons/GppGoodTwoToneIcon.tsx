import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GppGoodTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 6.31v4.78c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83V6.31l-6-2.12zm10.6 3.57-5.66 5.66L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24z',
        props,
        attrs
      );
  },
});