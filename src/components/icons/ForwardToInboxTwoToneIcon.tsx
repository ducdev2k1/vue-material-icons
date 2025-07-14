import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForwardToInboxTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 18H4V8l8 5 8-5v5h-2c-2.76 0-5 2.24-5 5m-1-7L4 6h16z',
        props,
        attrs
      );
  },
});