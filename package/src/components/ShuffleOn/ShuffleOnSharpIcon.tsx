import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShuffleOnSharpIcon',
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
              d: 'M1 1v22h22V1zm4.41 3 5.18 5.17-1.42 1.41L4 5.41zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
