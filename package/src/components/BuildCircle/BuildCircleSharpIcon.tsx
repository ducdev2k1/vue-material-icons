import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BuildCircleSharpIcon',
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
              fillRule: 'evenodd',
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.14 15.25-3.76-3.76c-1.22.43-2.64.17-3.62-.81-1.11-1.11-1.3-2.79-.59-4.1l2.35 2.35 1.41-1.41-2.35-2.35c1.32-.71 2.99-.52 4.1.59.98.98 1.24 2.4.81 3.62l3.76 3.76z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
