import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddchartSharpIcon',
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
              d: 'M11 9h2v8h-2zm-2 8v-6H7v6zm10 2H5V5h6V3H3v18h18v-8h-2zm-4-6v4h2v-4zm4-8V2h-2v3h-3v2h3v3h2V7h3V5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
