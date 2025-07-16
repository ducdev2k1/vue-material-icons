import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeveloperBoardOffTwoToneIcon',
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
              d: 'M4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2zm12-5.83V11h-2.17l-1-1H16V7h-4v2.17l-1-1V7H9.83l-2-2H18v10.17z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
