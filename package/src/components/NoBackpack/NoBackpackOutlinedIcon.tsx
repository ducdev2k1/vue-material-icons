import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoBackpackOutlinedIcon',
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
              d: 'M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83zM14.83 12l1.67 1.67V12zm4.95 10.61-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22 2.8 2.81l18.38 18.38zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
