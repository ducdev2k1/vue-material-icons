import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SatelliteOutlinedIcon',
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
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58M12 6h-1.71c0 2.36-1.92 4.29-4.29 4.29V12c3.32 0 6-2.69 6-6m2.14 5.86-3 3.87L9 13.15 6 17h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
