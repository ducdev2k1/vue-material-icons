import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TenMpSharpIcon',
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
              d: 'M13.5 7H15v3h-1.5zM21 3H3v18h18zm-8.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm2.5 0h-1.5v-6H18V17h-3zm-5-13v6H8.5V7H7V5.5zm6.5 0v6H12v-6zM15 14h1.5v1.5H15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
