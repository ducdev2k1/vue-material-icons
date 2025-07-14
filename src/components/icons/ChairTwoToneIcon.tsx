import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChairTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 13h10v-2c0-.88.39-1.67 1-2.22V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22z',
        props,
        attrs
      );
  },
});