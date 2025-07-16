import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeveloperBoardTwoToneIcon',
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
              d: 'M4 19h14V5H4zm8-12h4v3h-4zm0 4h4v6h-4zM6 7h5v5H6zm0 6h5v4H6z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
