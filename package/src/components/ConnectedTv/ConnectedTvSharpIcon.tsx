import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConnectedTvSharpIcon',
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
              d: 'M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55M5 14v2h2c0-1.11-.89-2-2-2',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
