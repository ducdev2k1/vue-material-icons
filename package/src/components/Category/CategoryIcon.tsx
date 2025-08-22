import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryIcon',
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
              d: 'm12 2-5.5 9h11z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '17.5',
              cy: '17.5',
              r: '4.5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 13.5h8v8H3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
