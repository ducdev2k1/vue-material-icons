import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirlinesSharpIcon',
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
              d: 'M13 4 2 20h17l3-16zm1.5 10c-1.38 0-2.5-1.12-2.5-2.5S13.12 9 14.5 9s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
