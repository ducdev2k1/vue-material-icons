import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OneKPlusTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm5.5-10H12v2.25L13.75 9h1.75l-2.25 3 2.25 3h-1.75L12 12.75V15h-1.5zM6 9h3v6H7.5v-4.5H6z',
        props,
        attrs
      );
  },
});