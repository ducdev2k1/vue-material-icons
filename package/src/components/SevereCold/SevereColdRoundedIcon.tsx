import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SevereColdRoundedIcon',
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
              d: 'M20 2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '20',
              cy: '9',
              r: '1',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm12 10.41 3.29-3.29c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L12 7.59V5c0-.55-.45-1-1-1s-1 .45-1 1v2.59L8.12 5.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10 10.41V12H8.41L5.12 8.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5.59 12H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-1.88 1.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L8.41 14H10v1.59l-3.29 3.29c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L10 18.41V21c0 .55.45 1 1 1s1-.45 1-1v-2.59l1.88 1.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12 15.59V14h1.59l3.29 3.29c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L16.41 14H19c.55 0 1-.45 1-1s-.45-1-1-1h-7z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
