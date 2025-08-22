import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurtainsClosedTwoToneIcon',
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
              d: 'M6 5h3v14H6zm9 0h3v14h-3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
