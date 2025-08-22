import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RememberMeSharpIcon',
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
              d: 'M19 1H5v22h14zm-2 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '10',
              r: '3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
