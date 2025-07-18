import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SendTwoToneIcon',
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
              d: 'm4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
