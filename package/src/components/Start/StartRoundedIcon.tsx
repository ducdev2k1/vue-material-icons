import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StartRoundedIcon',
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
              d: 'M15.29 17.29c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L16.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42L18.17 11H7c-.55 0-1 .45-1 1s.45 1 1 1h11.17l-2.88 2.88c-.39.39-.39 1.02 0 1.41M3 18c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
