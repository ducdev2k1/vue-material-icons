import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HealingTwoToneIcon',
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
              d: 'm13.03 16.72 3.63 3.62 3.62-3.63-3.62-3.62zM7.29 3.71 3.66 7.34l3.63 3.62 3.62-3.63z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
