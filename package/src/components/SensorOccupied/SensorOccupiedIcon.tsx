import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SensorOccupiedIcon',
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
              d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0 1c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m9.23-3.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38m13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
