import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppShortcutRoundedIcon',
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
              d: 'M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zm3.38-8.38.4.87c.09.2.37.2.46 0l.4-.87.87-.4c.2-.09.2-.37 0-.46l-.87-.4-.4-.87c-.09-.2-.37-.2-.46 0l-.4.87-.87.4c-.2.09-.2.37 0 .46z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
