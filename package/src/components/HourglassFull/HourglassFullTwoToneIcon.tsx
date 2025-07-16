import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HourglassFullTwoToneIcon',
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
              d: 'm8 7.5 4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
