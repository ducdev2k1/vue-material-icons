import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeaderboardTwoToneIcon',
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
              d: 'M10 5h4v14h-4zm-6 6h4v8H4zm16 8h-4v-6h4z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
