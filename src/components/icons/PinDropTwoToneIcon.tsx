import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PinDropTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 3C9.19 3 6 5.11 6 9.13c0 2.68 2 5.49 6 8.44 4-2.95 6-5.77 6-8.44C18 5.11 14.81 3 12 3',
        props,
        attrs
      );
  },
});