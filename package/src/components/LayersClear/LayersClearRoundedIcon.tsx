import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayersClearRoundedIcon',
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
              d: 'M19.99 9.79c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L9.41 4.02l7.88 7.88zm0 3.49-.01-.01a.991.991 0 0 0-1.22 0l-.05.04 1.4 1.4c.37-.41.34-1.07-.12-1.43m1.45 5.6L4.12 1.56a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.52 3.52-2.22 1.72c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.73.56 2.46 0l.87-.68 1.42 1.42-2.92 2.27c-.36.28-.87.28-1.23 0l-6.15-4.78a.991.991 0 0 0-1.22 0c-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l3.72-2.89 3.07 3.07c.39.39 1.02.39 1.41 0 .41-.39.41-1.02.02-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
