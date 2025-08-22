import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EighteenUpRatingSharpIcon',
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
              d: 'M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
