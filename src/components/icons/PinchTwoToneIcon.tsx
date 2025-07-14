import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PinchTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm21 15.56-4.24-1.89H15V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.17-.89 3.7 3.78h6.55z',
        props,
        attrs
      );
  },
});