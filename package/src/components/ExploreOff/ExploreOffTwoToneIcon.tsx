import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExploreOffTwoToneIcon',
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
              d: 'M12 20c1.48 0 2.86-.41 4.06-1.12l-3.98-3.98-5.58 2.6 2.59-5.58-3.97-3.98C4.41 9.14 4 10.52 4 12c0 4.41 3.59 8 8 8m0-16c-1.48 0-2.86.41-4.06 1.12l3.98 3.98 5.58-2.6-2.59 5.58 3.98 3.98c.7-1.2 1.11-2.58 1.11-4.06 0-4.41-3.59-8-8-8',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
