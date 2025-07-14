import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DomainVerificationTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 18h14V8H5zm3.82-6.42 2.12 2.12 4.24-4.24 1.41 1.41-5.66 5.66L7.4 13z',
        props,
        attrs
      );
  },
});