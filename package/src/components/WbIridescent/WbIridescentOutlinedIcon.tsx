import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WbIridescentOutlinedIcon',
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
              d: 'M5 15h14V9H5zm2-4h10v2H7zm4-10h2v3h-2zm9.46 4.01L19.04 3.6l-1.79 1.79 1.41 1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM4.96 3.595l1.788 1.79L5.34 6.79 3.553 5.003zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
