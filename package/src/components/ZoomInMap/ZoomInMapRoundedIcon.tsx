import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZoomInMapRoundedIcon',
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
              d: 'M3 8c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.59L4.62 3.21a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5.59 7H4c-.55 0-1 .45-1 1m17-1h-1.59l2.38-2.38c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L17 5.59V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1M4 17h1.59l-2.38 2.38c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L7 18.41V20c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m17-1c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.38 2.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L18.41 17H20c.55 0 1-.45 1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
