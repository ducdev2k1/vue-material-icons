import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LiquorSharpIcon',
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
              d: 'M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3zm2-6h2v3H5zm17 1-3-1.01V2h-5v6l-3 1.01V22h11zm-6-5h1v1h-1zm-3 6.44 3-.98V7h1v2.46l3 .98V12h-7zM20 20h-7v-2h7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
