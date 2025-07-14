import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PanoramaVerticalTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6.54 4c.77 2.6 1.16 5.28 1.16 8s-.39 5.4-1.16 8h10.91c-.77-2.6-1.16-5.28-1.16-8s.39-5.4 1.16-8z',
        props,
        attrs
      );
  },
});