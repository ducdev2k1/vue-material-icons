import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraAltSharpIcon',
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
              d: 'M16.83 4 15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
