import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HistoryEduTwoToneIcon',
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
              d: 'M11.34 9.76 9.93 8.34c-.95-.94-2.2-1.46-3.54-1.46-.63 0-1.25.12-1.82.34l1.04 1.04h2.28v2.14c.4.23.86.35 1.33.35.73 0 1.41-.28 1.92-.8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
