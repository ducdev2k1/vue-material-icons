import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextWeekTwoToneIcon',
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
              d: 'M4 20h16V9H4zm6-8.5 1-1 4 4-4 4-1-1 3-3z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
