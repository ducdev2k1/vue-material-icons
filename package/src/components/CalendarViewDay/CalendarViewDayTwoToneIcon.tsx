import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalendarViewDayTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 12h14v1H5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
