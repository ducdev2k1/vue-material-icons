import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoCameraSharpIcon',
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
            tag: 'circle',
            props: {
              cx: '12',
              cy: '12',
              r: '3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9 2 7.17 4H2v16h20V4h-5.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
