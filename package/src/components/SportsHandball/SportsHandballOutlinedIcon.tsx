import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsHandballOutlinedIcon',
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
              d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
