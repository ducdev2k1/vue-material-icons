import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteTwoToneIcon',
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
              d: 'M15 6H4v12.01h16V11h-5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zm16 14.01H4V6h11v5h5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
