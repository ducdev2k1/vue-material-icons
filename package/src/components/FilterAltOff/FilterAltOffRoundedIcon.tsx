import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterAltOffRoundedIcon',
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
              d: 'M19.79 5.61C20.3 4.95 19.83 4 19 4H6.83l7.97 7.97zm.7 14.88L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-1.17l5.07 5.07c.39.39 1.02.39 1.41 0s.4-1.02.01-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
