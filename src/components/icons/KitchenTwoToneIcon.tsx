import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KitchenTwoToneIcon',
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
              d: 'M8 5h2v3H8zm0 7h2v5H8zm-2 8h12v-9.02H6zm2-8h2v5H8zM6 9h12V4H6zm2-4h2v3H8z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
