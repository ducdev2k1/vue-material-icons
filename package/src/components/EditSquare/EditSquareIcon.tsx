import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditSquareIcon',
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
              d: 'M7 17V9.93L13.93 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8.93L14.07 17z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9 15h4.24l7.2-7.2-4.24-4.24-7.2 7.2zM22.91 2.49 21.5 1.08c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24 1.06-1.06c.79-.78.79-2.05 0-2.83',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
