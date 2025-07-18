import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rotate90DegreesCwOutlinedIcon',
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
              d: 'M2 13c0 4.97 4.03 9 9 9 1.76 0 3.4-.51 4.79-1.38l-1.46-1.46c-.99.53-2.13.84-3.33.84-3.86 0-7-3.14-7-7s3.14-7 7-7h.17L9.59 7.59 11 9l4-4-4-4-1.42 1.41L11.17 4H11c-4.97 0-9 4.03-9 9m9 0 6 6 6-6-6-6zm6 3.17L13.83 13 17 9.83 20.17 13z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
