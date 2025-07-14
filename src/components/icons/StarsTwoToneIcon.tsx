import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StarsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19.47 9.16c-1.1-2.87-3.8-4.95-7.01-5.14l2 4.71zm-7.93-5.14c-3.22.18-5.92 2.27-7.02 5.15l5.02-.43zm-7.31 6.12C4.08 10.74 4 11.36 4 12c0 2.48 1.14 4.7 2.91 6.17l1.11-4.75zm15.54-.01-3.79 3.28 1.1 4.76C18.86 16.7 20 14.48 20 12c0-.64-.09-1.27-.23-1.87M7.84 18.82c1.21.74 2.63 1.18 4.15 1.18 1.53 0 2.95-.44 4.17-1.18L12 16.31z',
        props,
        attrs
      );
  },
});