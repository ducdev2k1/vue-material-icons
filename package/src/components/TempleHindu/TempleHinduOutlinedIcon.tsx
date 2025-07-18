import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TempleHinduOutlinedIcon',
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
              d: 'M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11zm-4.69 0H8.69l.6-2h5.42zm-1.2-4H9.89l.6-2h3.02zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
