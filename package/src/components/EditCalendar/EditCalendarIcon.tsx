import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditCalendarIcon',
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
              d: 'M12 22H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2v6h-2v-2H5v10h7zm10.13-5.01.71-.71c.39-.39.39-1.02 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0l-.71.71zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
