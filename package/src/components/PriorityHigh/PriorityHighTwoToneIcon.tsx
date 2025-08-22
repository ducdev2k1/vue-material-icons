import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PriorityHighTwoToneIcon',
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
              cy: '19',
              r: '2',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 3h4v12h-4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
