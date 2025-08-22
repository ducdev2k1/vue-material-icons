import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InstallMobileSharpIcon',
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
              d: 'M17 18H7V6h7V1H5v22h14v-7h-2z',
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
