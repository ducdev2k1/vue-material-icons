import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageAspectRatioTwoToneIcon',
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
              d: 'M4 18h16V6H4zm10-8h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm-4 0h2v2H6z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
