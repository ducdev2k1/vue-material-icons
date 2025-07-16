import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PresentToAllTwoToneIcon',
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
              d: 'M3 19.02h18V4.98H3zM12 8l4 4h-2v4h-4v-4H8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
