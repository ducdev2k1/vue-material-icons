import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsFootballOutlinedIcon',
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
              d: 'M20.31 3.69c-.32-.33-1.94-.69-4.05-.69-3.03 0-7.09.75-9.8 3.46-4.59 4.59-3.56 13.06-2.77 13.85.32.33 1.94.69 4.05.69 3.03 0 7.09-.75 9.8-3.46 4.59-4.59 3.56-13.06 2.77-13.85M7.74 19c-1.14 0-2.02-.12-2.53-.23-.18-.79-.3-2.21-.17-3.83l4.01 4.01c-.52.04-.97.05-1.31.05m8.39-2.87c-1.33 1.33-3.06 2.05-4.66 2.44l-6.04-6.04c.42-1.68 1.16-3.37 2.45-4.65 1.32-1.32 3.05-2.04 4.64-2.43l6.05 6.05c-.42 1.67-1.17 3.35-2.44 4.63m2.83-7.04-4.03-4.03c.52-.05.98-.06 1.33-.06 1.14 0 2.02.12 2.53.23.18.79.3 2.22.17 3.86',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
