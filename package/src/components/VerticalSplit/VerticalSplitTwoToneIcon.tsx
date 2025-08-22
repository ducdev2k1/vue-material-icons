import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VerticalSplitTwoToneIcon',
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
              d: 'M15 7h4v10h-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5zm6 12h-4V7h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
