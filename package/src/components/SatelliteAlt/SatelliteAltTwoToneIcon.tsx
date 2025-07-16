import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SatelliteAltTwoToneIcon',
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
              d: 'm6.6 19.32-1.06 1.06L2 16.85l1.06-1.06zm2.12-2.12-1.06 1.06-3.54-3.54 1.06-1.06zm4.95-4.95-1.41 1.41-3.54-3.54 1.41-1.41zm4.59-4.59L17.2 8.72l-3.54-3.54 1.06-1.06zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
