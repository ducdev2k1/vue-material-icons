import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TourTwoToneIcon',
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
              d: 'M7 12V6h11.05l-1.2 3 1.2 3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M21 4H7V2H5v20h2v-8h14l-2-5zM7 12V6h11.05l-1.2 3 1.2 3zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
