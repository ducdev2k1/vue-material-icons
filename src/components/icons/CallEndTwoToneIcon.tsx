import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallEndTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18.59 12.23c.67.38 1.3.8 1.88 1.27l1.07-1.07c-.92-.75-1.91-1.39-2.96-1.91v1.71zM3.53 13.49c.59-.48 1.22-.9 1.87-1.27v-1.7c-1.04.51-2.03 1.15-2.94 1.9z',
        props,
        attrs
      );
  },
});