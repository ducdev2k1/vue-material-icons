import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TornadoRoundedIcon',
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
              d: 'm20.11 8 1.16-2c.77-1.33-.19-3-1.73-3H4.47c-1.54 0-2.5 1.67-1.73 3L3.9 8zM7.95 15l2.32 4.01c.77 1.33 2.69 1.33 3.46 0L16.05 15zm11-5H5.05l1.74 3h10.42z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
