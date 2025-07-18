import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ForkliftIcon',
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
              d: 'M23 17v2h-5V3h2v14zm-6.27-1.85c.17.42.27.87.27 1.35 0 1.93-1.57 3.5-3.5 3.5-1.4 0-2.6-.82-3.16-2H6.83A2.99 2.99 0 0 1 4 20c-1.66 0-3-1.34-3-3 0-.89.39-1.69 1-2.24V10h2V4h8zM5 17c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m8.65-4-2.97-7H6v4l2.92 3zM15 16.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
