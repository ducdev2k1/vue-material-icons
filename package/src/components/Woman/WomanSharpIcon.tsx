import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WomanSharpIcon',
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
              d: 'M13.41 7h-2.82L7 16h3v6h4v-6h3z',
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
