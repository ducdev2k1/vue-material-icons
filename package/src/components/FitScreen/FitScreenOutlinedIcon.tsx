import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FitScreenOutlinedIcon',
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
              d: 'M6 16h12V8H6zm2-6h8v4H8zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2m0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
