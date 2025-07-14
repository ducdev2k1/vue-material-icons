import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventSeatOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 5v7H9V5zm0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2m7 7h-3v3h3zM5 10H2v3h3zm15 5H4v6h2v-4h12v4h2z',
        props,
        attrs
      );
  },
});