import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlineSeatLegroomExtraRoundedIcon',
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
              d: 'M4 12V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H7c-1.66 0-3-1.34-3-3m18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98C15.96 9.45 15.27 9 14.51 9H11V3H5v8c0 1.66 1.34 3 3 3h7l2.56 5.25c.48.98 1.64 1.39 2.63.94l1.95-.89c.76-.36 1.09-1.3.69-2.06',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
