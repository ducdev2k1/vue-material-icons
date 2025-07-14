import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoFixNormalTwoToneIcon',
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
              d: 'm4.4149 18.1667 7.17-7.17 1.4142 1.4141-7.17 7.1701z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
