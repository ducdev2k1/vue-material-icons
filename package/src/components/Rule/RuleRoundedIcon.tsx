import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RuleRoundedIcon',
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
              d: 'm15.83 10.29-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-4.24 4.24c-.39.4-1.02.4-1.41.01M10 7H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1m10.29 5.71a.996.996 0 0 0-1.41 0L17 14.59l-1.88-1.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L15.59 16l-1.88 1.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L17 17.41l1.88 1.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L18.41 16l1.88-1.88c.39-.39.39-1.02 0-1.41M10 15H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
