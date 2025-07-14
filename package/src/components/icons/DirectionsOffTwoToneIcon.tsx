import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsOffTwoToneIcon',
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
              d: 'm21.71 11.29-9-9a.996.996 0 0 0-1.41 0L8.21 5.38l1.41 1.41L12 4.42 19.58 12l-2.38 2.38 1.41 1.41 3.09-3.09c.4-.37.4-1 .01-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
