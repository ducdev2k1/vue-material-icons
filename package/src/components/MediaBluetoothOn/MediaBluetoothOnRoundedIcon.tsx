import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaBluetoothOnRoundedIcon',
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
              d: 'm9 5 .01 8.55c-.6-.34-1.28-.55-2-.55C4.79 13 3 14.79 3 17s1.79 4 4.01 4S11 19.21 11 17V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2m11.29 6.72-2.47-2.47c-.32-.31-.85-.09-.85.35v3.94l-2.33-2.33c-.23-.23-.61-.23-.85 0-.23.23-.23.62 0 .85L16.73 15l-2.93 2.93c-.23.23-.23.61 0 .85.23.23.61.23.85 0l2.33-2.33v3.94c0 .45.54.67.85.35l2.46-2.46c.39-.39.39-1.02 0-1.41L18.42 15l1.87-1.86c.39-.39.39-1.03 0-1.42m-2.12-.42 1.13 1.13-1.13 1.13zm1.13 6.27-1.13 1.13v-2.26z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
