import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellularNodataRoundedIcon',
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
              d: 'M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.39 1.39-1.39 1.39c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.39-1.38 1.39 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.38-1.39 1.38-1.39c.39-.39.39-1.02 0-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
