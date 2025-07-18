import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeakAddTwoToneIcon',
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
              d: 'M18 21h3v-3c-1.66 0-3 1.34-3 3M3 14c6.08 0 11-4.93 11-11h-2c0 4.97-4.03 9-9 9zm11 7h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7M3 10c3.87 0 7-3.13 7-7H8c0 2.76-2.24 5-5 5zm7 11h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11M3 3v3c1.66 0 3-1.34 3-3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
