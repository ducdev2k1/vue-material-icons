import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadsetOffSharpIcon',
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
              d: 'M12 4c3.87 0 7 3.13 7 7v1h-4v.17l6 6V11c0-4.97-4.03-9-9-9-2.02 0-3.88.67-5.38 1.8l1.43 1.43C9.17 4.45 10.53 4 12 4M2.1 2.1.69 3.51l3.33 3.33C3.37 8.09 3 9.5 3 11v9h6v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h8.17l.31.31 1.41-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
