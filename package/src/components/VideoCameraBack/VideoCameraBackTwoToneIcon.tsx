import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoCameraBackTwoToneIcon',
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
              d: 'M4 18h12V6H4zm3.38-5.17L9 15l2.62-3.5L15 16H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11.62 11.5 9 15l-1.62-2.17L5 16h10z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11zM16 18H4V6h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
