import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GMobiledataRoundedIcon',
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
              d: 'M12 12c0 .55.45 1 1 1h1v2H9V9h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
