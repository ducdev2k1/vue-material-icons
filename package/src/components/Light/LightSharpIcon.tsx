import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LightSharpIcon',
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
              d: 'M13 6.06V3h-2v3.06C5.87 6.63 2.03 11.51 3.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.0056 9.0056 0 0 0 13 6.06M12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
