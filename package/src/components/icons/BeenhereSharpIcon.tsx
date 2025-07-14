import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeenhereSharpIcon',
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
              d: 'M3.01 1 3 17l9 6 8.99-6L21 1zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
