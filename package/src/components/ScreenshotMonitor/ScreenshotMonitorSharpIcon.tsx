import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScreenshotMonitorSharpIcon',
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
              d: 'M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
