import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreeBreakfastTwoToneIcon',
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
              d: 'M6 13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5H6z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
