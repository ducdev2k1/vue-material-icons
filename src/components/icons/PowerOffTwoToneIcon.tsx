import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PowerOffTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12.12 9 16 12.88V9zm-.62 8.17V19h1v-1.83l1.07-1.06L8 10.54v3.11z',
        props,
        attrs
      );
  },
});