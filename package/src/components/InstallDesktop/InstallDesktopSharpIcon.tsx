import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstallDesktopSharpIcon',
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
              d: 'M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
