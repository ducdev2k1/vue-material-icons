import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MapsHomeWorkIcon',
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
              d: 'M1 11v10h5v-6h4v6h5V11L8 6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3zm9 6h-2V7h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
