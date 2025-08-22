import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddBusinessSharpIcon',
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
              d: 'M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
