import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlaylistAddCircleIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
