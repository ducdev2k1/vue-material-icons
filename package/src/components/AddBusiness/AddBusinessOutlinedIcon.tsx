import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddBusinessOutlinedIcon',
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
              d: 'M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6 .6-3h11.72l.6 3z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
