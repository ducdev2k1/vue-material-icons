import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoveRoadRoundedIcon',
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
              d: 'M19 4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1M5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1m7-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m9.79-4.29a.996.996 0 0 0-1.41 0L19 17.09l-1.38-1.38a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.38 1.38-1.38 1.38c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L19 19.91l1.38 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.38-1.38 1.38-1.38c.39-.39.39-1.02 0-1.41',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
