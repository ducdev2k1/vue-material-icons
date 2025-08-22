import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeWorkOutlinedIcon',
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
              d: 'M1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-6.97l5-3.57 5 3.57zm4-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
