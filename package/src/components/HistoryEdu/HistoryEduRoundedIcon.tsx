import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HistoryEduRoundedIcon',
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
              d: 'M9 5v.38c-.83-.33-1.72-.5-2.61-.5-1.42 0-2.84.43-4.05 1.29-.51.36-.57 1.09-.13 1.53l2.57 2.57h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H7c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V5c0-.55-.45-1-1-1H10c-.55 0-1 .45-1 1m-1.11 5.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34M19 17c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55-.45-1-1-1h-5v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
