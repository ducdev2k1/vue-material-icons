import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewCozyTwoToneIcon',
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
              d: 'M4 18h16V6H4zm8.75-10.75h4v4h-4zm0 5.5h4v4h-4zm-5.5-5.5h4v4h-4zm0 5.5h4v4h-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
