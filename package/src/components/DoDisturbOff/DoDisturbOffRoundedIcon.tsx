import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoDisturbOffRoundedIcon',
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
              d: 'M17 11v2h-.88l4.33 4.33C21.43 15.79 22 13.96 22 12c0-5.52-4.48-10-10-10-1.96 0-3.79.57-5.33 1.55L14.12 11zm4.17 9.88L3.12 2.83a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.07 2.07C2.66 7.93 2 9.89 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78l2.07 2.07c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41M7 13v-2h1.46l2 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
