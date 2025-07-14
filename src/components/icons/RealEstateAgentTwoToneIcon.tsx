import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RealEstateAgentTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm10.5 9.44 5.32 1.99c1.24.46 2.21 1.41 2.74 2.57H19V7.5L14 4 9 7.5V9h.33zm4-2.44h1v1h-1zm0 2h1v1h-1zm-2-2h1v1h-1zm0 2h1v1h-1zM3 13h2v7H3zm16.9 5.57-5.93 1.84L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56',
        props,
        attrs
      );
  },
});