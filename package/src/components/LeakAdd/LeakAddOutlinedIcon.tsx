import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeakAddOutlinedIcon',
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
              d: 'M6 3H3v3c1.66 0 3-1.34 3-3m8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11m-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7m0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11m8 0h3v-3c-1.66 0-3 1.34-3 3m-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
