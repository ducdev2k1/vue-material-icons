import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstallMobileOutlinedIcon',
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
              d: 'M17 18H7V6h7V4H7V3h7V1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2zm0 3H7v-1h10z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
