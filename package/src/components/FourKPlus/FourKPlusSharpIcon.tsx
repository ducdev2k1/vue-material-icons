import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FourKPlusSharpIcon',
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
              d: 'M21 3H3v18h18zM11 13.5h-1V15H8.5v-1.5h-3V9H7v3h1.5V9H10v3h1zm3.75 1.5L13 12.75V15h-1.5V9H13v2.25L14.75 9h1.75l-2.25 3 2.25 3zM19 12.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
