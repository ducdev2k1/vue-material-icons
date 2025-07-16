import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BroadcastOnPersonalOutlinedIcon',
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
              d: 'M4 19v-9l6-4.5 4.08 3.06c.81-.32 1.69-.51 2.61-.54L10 3 2 9v12h8.76c-.48-.6-.88-1.27-1.17-2zm13-4.25c-.69 0-1.25.56-1.25 1.25 0 .4.2.75.5.97V22h1.5v-5.03c.3-.23.5-.57.5-.97 0-.69-.56-1.25-1.25-1.25',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
