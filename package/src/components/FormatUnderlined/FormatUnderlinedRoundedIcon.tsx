import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatUnderlinedRoundedIcon',
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
              d: 'M12.79 16.95c3.03-.39 5.21-3.11 5.21-6.16V4.25C18 3.56 17.44 3 16.75 3s-1.25.56-1.25 1.25v6.65c0 1.67-1.13 3.19-2.77 3.52-2.25.47-4.23-1.25-4.23-3.42V4.25C8.5 3.56 7.94 3 7.25 3S6 3.56 6 4.25V11c0 3.57 3.13 6.42 6.79 5.95M5 20c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
