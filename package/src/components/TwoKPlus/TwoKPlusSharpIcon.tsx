import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TwoKPlusSharpIcon',
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
              d: 'M21 3H3v18h18zm-11 9.5H7.5v1H10V15H6v-3.5h2.5v-1H6V9h4zm4.25 2.5-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
