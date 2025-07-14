import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoAwesomeTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.99 11.01 9 8.83l-.99 2.18-2.18.99 2.18.99.99 2.18.99-2.18 2.18-.99z',
        props,
        attrs
      );
  },
});