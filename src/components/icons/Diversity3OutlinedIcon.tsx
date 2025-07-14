import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Diversity3OutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6.32 13.01c.96.02 1.85.5 2.45 1.34C9.5 15.38 10.71 16 12 16s2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3',
        props,
        attrs
      );
  },
});