import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Shop2OutlinedIcon',
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
              d: 'M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M12 8v7l5.5-3.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
