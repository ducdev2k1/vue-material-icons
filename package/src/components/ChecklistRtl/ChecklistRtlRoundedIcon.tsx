import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChecklistRtlRoundedIcon',
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
              d: 'M11 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m0 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m6.05-5.71c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41zm0 8c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
