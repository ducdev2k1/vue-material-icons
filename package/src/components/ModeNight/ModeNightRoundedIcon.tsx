import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModeNightRoundedIcon',
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
              d: 'M11.93 2.3c-2.04-.5-4.02-.35-5.77.28-.72.26-.91 1.22-.31 1.71C8.08 6.12 9.5 8.89 9.5 12s-1.42 5.88-3.65 7.71c-.59.49-.42 1.45.31 1.7 1.04.38 2.17.59 3.34.59 6.05 0 10.85-5.38 9.87-11.6-.61-3.92-3.59-7.16-7.44-8.1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
