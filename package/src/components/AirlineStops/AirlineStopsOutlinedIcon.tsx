import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlineStopsOutlinedIcon',
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
              d: 'M19 8.7c-2.46 1.5-5.5 4.17-6 8.3h2v2H9v-2h2c-.5-4.5-4.37-8-9-8V7c4.39 0 8.22 2.55 10 6.3 1.38-2.97 3.86-5.03 5.96-6.31L14 7V5h7v7h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
