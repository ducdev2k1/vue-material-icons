import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DraftsRoundedIcon',
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
              d: 'M21.99 8c0-.72-.37-1.35-.94-1.7l-8.04-4.71c-.62-.37-1.4-.37-2.02 0L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-11.05 4.34-7.2-4.5 7.25-4.25c.62-.37 1.4-.37 2.02 0l7.25 4.25-7.2 4.5c-.65.4-1.47.4-2.12 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
