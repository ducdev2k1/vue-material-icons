import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditLocationTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M14.11 14H8V7.91l.59-.59L11.91 4C8.61 4.05 6 6.6 6 10.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14v-.08l-3.3 3.3z',
        props,
        attrs
      );
  },
});