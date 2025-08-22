import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewComfyAltTwoToneIcon',
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
              d: 'M4 18h16V6H4zm9-11h4v4h-4zm0 6h4v4h-4zM7 7h4v4H7zm0 6h4v4H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z',
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
