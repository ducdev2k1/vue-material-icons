import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCompactOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M2 4v16h20V4zm4.5 14H4v-2.5h2.5zm0-4.75H4v-2.5h2.5zm0-4.75H4V6h2.5zM11 18H8.5v-2.5H11zm0-4.75H8.5v-2.5H11zm0-4.75H8.5V6H11zm4.5 9.5H13v-2.5h2.5zm0-4.75H13v-2.5h2.5zm0-4.75H13V6h2.5zM20 18h-2.5v-2.5H20zm0-4.75h-2.5v-2.5H20zm0-4.75h-2.5V6H20z',
        props,
        attrs
      );
  },
});