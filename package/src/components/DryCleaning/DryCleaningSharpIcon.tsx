import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DryCleaningSharpIcon',
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
              d: 'm21 12-8-3.56V6h-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.18.22-2.15 1.17-2.38 2.35-.3 1.56.6 2.94 1.94 3.42v.63l-8 3.56V16h4v6h10v-6h4zm-2 2h-2v-1H7v1H5v-.7l7-3.11 7 3.11z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
