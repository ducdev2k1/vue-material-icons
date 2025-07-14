import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsBaseballSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28m16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72',
        props,
        attrs
      );
  },
});