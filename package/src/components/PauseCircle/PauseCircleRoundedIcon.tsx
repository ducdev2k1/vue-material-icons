import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PauseCircleRoundedIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
