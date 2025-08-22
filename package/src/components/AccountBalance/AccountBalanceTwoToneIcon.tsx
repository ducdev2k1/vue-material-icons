import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountBalanceTwoToneIcon',
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
              d: 'm6.29 6 5.21-2.74L16.71 6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-9L2 6v2h19V6zM6.29 6l5.21-2.74L16.71 6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
