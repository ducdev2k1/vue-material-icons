import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CancelScheduleSendRoundedIcon',
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
              d: 'M16.5 9c-.42 0-.83.04-1.24.11L2.4 3.6c-.66-.29-1.39.2-1.39.91L1 9.2c0 .47.33.88.78.98L10 12l-8.22 1.83c-.45.1-.78.5-.78.97l.01 4.68c0 .72.73 1.2 1.39.92l6.68-2.86C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
