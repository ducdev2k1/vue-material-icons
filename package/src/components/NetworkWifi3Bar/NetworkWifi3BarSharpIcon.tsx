import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NetworkWifi3BarSharpIcon',
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
              d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-2.85 2.86C16.46 10.71 14.31 10 12 10s-4.46.71-6.23 1.93z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
