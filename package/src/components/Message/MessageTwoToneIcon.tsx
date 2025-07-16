import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageTwoToneIcon',
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
              d: 'M20 4H4v13.17L5.17 16H20zm-2 10H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
