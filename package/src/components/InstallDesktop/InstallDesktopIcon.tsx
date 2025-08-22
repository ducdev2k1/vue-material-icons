import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstallDesktopIcon',
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
              d: 'M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2z',
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
