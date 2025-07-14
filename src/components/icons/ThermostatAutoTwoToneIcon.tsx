import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThermostatAutoTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.8 13.6 9 13V6c0-.55-.45-1-1-1s-1 .45-1 1v7l-.8.6C5.45 14.16 5 15.06 5 16h6c0-.94-.45-1.83-1.2-2.4',
        props,
        attrs
      );
  },
});