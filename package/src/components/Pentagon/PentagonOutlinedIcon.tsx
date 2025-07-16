import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PentagonOutlinedIcon',
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
              d: 'M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44zM2 9l4 12h12l4-12-10-7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
