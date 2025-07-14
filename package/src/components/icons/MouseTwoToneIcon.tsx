import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MouseTwoToneIcon',
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
              d: 'M13 3.16V9h5c-.04-2.94-2.19-5.37-5-5.84m-2 0C8.19 3.63 6.04 6.06 6 9h5zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
