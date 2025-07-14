import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataThresholdingTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 19v-1.73L17.27 19zM5 17.72 6.72 16h2.12l-3 3h1.83l3-3h2.12l-3 3h1.62l3-3h2.12l-3 3h1.62l3-3H19V5H5zm5.67-9.55 2 2 3.67-3.67 1.41 1.41L12.67 13l-2-2-3 3-1.41-1.41z',
        props,
        attrs
      );
  },
});