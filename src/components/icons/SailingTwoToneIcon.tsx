import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SailingTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9 11.5H6.83L9 8.38zm6.38-6.26c1.42 1.52 2.88 3.72 3.41 6.26h-3.68c.21-1.1.39-2.46.39-4 0-.79-.05-1.55-.12-2.26',
        props,
        attrs
      );
  },
});