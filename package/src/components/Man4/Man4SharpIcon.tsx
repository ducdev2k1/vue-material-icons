import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Man4SharpIcon',
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
              d: 'M7.96 7 10 22h4l2.04-15z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '4',
              r: '2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
