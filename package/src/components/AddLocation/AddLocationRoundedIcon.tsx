import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddLocationRoundedIcon',
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
              d: 'M13 7c0-.55-.44-1-1-1-.55 0-1 .44-1 1v2H9c-.55 0-1 .44-1 1 0 .55.44 1 1 1h2v2c0 .55.44 1 1 1 .55 0 1-.44 1-1v-2h2c.55 0 1-.44 1-1 0-.55-.44-1-1-1h-2zm-1-5c4.2 0 8 3.22 8 8.2 0 3.18-2.45 6.92-7.34 11.23-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
