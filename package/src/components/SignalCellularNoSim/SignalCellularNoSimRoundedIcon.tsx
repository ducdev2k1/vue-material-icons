import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignalCellularNoSimRoundedIcon',
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
              d: 'M19 5c0-1.1-.9-2-2-2h-6.17c-.53 0-1.04.21-1.42.59L7.95 5.06 19 16.11zM3.09 4.44c-.39.39-.39 1.02 0 1.41L5 7.78V19c0 1.11.9 2 2 2h11.23l.91.91c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.5 4.44a.996.996 0 0 0-1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
