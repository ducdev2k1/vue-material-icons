import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FindInPageTwoToneIcon',
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
              d: 'M6 4v16h11.6l-2.85-2.85c-.83.55-1.79.83-2.75.83-1.28 0-2.55-.49-3.53-1.46-1.95-1.95-1.95-5.11 0-7.05C9.45 8.49 10.72 8 12 8s2.55.49 3.53 1.46c1.71 1.71 1.92 4.34.64 6.28L18 17.58V9l-5-5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
