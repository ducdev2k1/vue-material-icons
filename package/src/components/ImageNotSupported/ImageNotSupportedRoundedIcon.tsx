import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageNotSupportedRoundedIcon',
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
              d: 'm21.19 21.19-.78-.78L18 18l-4.59-4.59-9.82-9.82-.78-.78a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42M6.02 18c-.42 0-.65-.48-.39-.81l2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53L12.17 15l3 3zm14.98.17L5.83 3H19c1.1 0 2 .9 2 2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
