import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoAwesomeMosaicRoundedIcon',
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
              d: 'M3 5v14c0 1.1.89 2 2 2h6V3H5c-1.11 0-2 .9-2 2m16-2h-6v8h8V5c0-1.1-.9-2-2-2m-6 18h6c1.1 0 2-.9 2-2v-6h-8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
