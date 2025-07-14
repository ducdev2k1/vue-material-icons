import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarViewWeekTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zm13.5 0H20v12h-2.5z',
        props,
        attrs
      );
  },
});