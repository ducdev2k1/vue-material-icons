import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NumbersRoundedIcon',
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
              d: 'm20.68 9.27.01-.06c.16-.62-.3-1.21-.93-1.21H17l.7-2.79c.15-.62-.31-1.21-.94-1.21-.45 0-.83.3-.94.73L15 8h-4l.7-2.79c.15-.62-.31-1.21-.94-1.21-.45 0-.83.3-.94.73L9 8H5.76c-.45 0-.84.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H8.5l-1 4H4.26c-.45 0-.83.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H7l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L9 16h4l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L15 16h3.24c.45 0 .83-.3.94-.73l.01-.06c.15-.61-.31-1.21-.94-1.21H15.5l1-4h3.24c.45 0 .84-.3.94-.73M13.5 14h-4l1-4h4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
