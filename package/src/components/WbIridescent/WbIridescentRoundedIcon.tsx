import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WbIridescentRoundedIcon',
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
              d: 'M6 15h12c.55 0 1-.45 1-1v-3.95c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1m5-13v1.05c0 .55.45.95 1 .95s1-.4 1-.95V2c0-.55-.45-1-1-1s-1 .45-1 1m7.34 2.3-.38.38c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.38-.38c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0M13 22v-.96c0-.55-.45-1-1-1s-1 .45-1 1V22c0 .55.45 1 1 1s1-.45 1-1m6.74-3.61-.39-.39a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.38.39c.39.39 1.02.39 1.41 0l.01-.01c.39-.38.39-1.02 0-1.4M4.25 5.71l.39.39c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-.39-.39a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41m1.42 14.08.38-.38c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.38.38c-.39.39-.39 1.02 0 1.41.38.39 1.02.39 1.41 0',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
