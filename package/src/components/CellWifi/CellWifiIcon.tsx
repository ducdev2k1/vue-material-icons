import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CellWifiIcon',
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
              d: 'M18 9.98 6 22h16V5.97zM20 20h-2v-7.22l2-2zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
