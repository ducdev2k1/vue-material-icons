import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TerrainRoundedIcon',
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
              d: 'M13.2 7.07 10.25 11l2.25 3c.33.44.24 1.07-.2 1.4s-1.07.25-1.4-.2c-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33c-.4-.54-1.2-.54-1.6 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
