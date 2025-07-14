import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ParkRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25c-.4-.57-1.24-.57-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98s1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55z',
        props,
        attrs
      );
  },
});