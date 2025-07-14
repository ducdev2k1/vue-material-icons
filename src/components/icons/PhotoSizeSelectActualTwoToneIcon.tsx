import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoSizeSelectActualTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3.08 5 3 5.08V19h17.92c.03-.02.06-.06.08-.08V5.08L20.92 5zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z',
        props,
        attrs
      );
  },
});