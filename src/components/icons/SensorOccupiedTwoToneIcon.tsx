import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SensorOccupiedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8.14 15h7.7c-1.16-.65-2.5-1-3.85-1-1.34 0-2.67.35-3.85 1',
        props,
        attrs
      );
  },
});