import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoutSharpIcon',
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
              d: 'M5 5h7V3H3v18h9v-2H5z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm21 12-4-4v3H9v2h8v3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
