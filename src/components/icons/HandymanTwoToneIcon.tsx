import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HandymanTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm8.66 14.64-4.25 4.24.71.71 4.24-4.25zm5.9356.7054.7071-.7072 4.2426 4.2427-.707.7071z',
        props,
        attrs
      );
  },
});