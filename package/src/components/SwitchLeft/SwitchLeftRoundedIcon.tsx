import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitchLeftRoundedIcon',
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
              d: 'M8.5 8.62v6.76L5.12 12zm-4.79 2.67c-.39.39-.39 1.02 0 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59c.39-.39.39-1.02 0-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
