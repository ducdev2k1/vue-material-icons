import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaBluetoothOnOutlinedIcon',
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
              d: 'm9 3 .01 10.55c-.6-.34-1.28-.55-2-.55C4.79 13 3 14.79 3 17s1.79 4 4.01 4S11 19.21 11 17V7h4V3zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15zm-2.83-1.13 1.13 1.13-1.13 1.13zm1.13 6.27-1.13 1.13v-2.26z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
