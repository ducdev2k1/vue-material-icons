import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewComfyTwoToneIcon',
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
              d: 'M10 18h10v-5H10zM4 6v5h16V6zm0 12h4v-5H4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M2 4v16h20V4zm6 14H4v-5h4zm12 0H10v-5h10zm0-7H4V6h16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
