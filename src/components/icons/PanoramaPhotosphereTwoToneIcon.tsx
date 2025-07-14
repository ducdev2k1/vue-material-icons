import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PanoramaPhotosphereTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 9.91v4.18C5.19 15.3 8.47 16 12 16s6.81-.69 9-1.91V9.91C18.81 8.7 15.53 8 12 8s-6.8.69-9 1.91',
        props,
        attrs
      );
  },
});