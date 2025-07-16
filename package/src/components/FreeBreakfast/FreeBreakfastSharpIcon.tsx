import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreeBreakfastSharpIcon',
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
              d: 'M20 3H4v14h14v-7h2c1.11 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM4 19h16v2H4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
