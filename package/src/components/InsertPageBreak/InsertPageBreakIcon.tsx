import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsertPageBreakIcon',
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
              d: 'M4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-3H4zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2v7H20zm-7 1V3.5L18.5 9zm-4 4h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
