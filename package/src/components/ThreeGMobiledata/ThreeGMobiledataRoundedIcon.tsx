import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThreeGMobiledataRoundedIcon',
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
              d: 'M3 8c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h3v2H4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1m18 4v3c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6h5v-2h-1.5c-.55 0-1-.45-1-1s.45-1 1-1H20c.55 0 1 .45 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
