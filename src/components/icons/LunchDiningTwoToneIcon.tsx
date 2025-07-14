import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LunchDiningTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 18h16v1H4zm8-13c-3.39 0-6.99.81-7.82 3h15.66c-.13-.37-.35-.7-.66-1.01C17.93 5.73 15.31 5 12 5',
        props,
        attrs
      );
  },
});