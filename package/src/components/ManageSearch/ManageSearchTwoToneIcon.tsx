import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ManageSearchTwoToneIcon',
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
              d: 'M2 12h5v2H2zm16.17 1.75c.52-.79.83-1.73.83-2.75 0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.02 0 1.96-.31 2.76-.83L20.59 19 22 17.59zM14 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3M2 7h5v2H2zm0 10h10v2H2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
