import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileOffRoundedIcon',
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
              d: 'M17 16.44 3.61 3.05a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L19 18.44zM7 19V9.27L16.73 19zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
