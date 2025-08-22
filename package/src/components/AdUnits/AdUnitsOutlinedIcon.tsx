import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AdUnitsOutlinedIcon',
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
              d: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7 4V3h10v1zm0 14V6h10v12zm0 3v-1h10v1z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16 7H8v2h8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
