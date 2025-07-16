import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellular1BarSharpIcon',
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
              fillOpacity: '.3',
              d: 'M2 22h20V2L2 22z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 12L2 22h10V12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
