import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SickIcon',
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
              d: 'M21 9c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2m-3.5-2c0-.73.41-1.71.92-2.66C16.68 2.88 14.44 2 11.99 2 6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12-1.93 0-3.5-1.57-3.5-3.5m-1.88.38 1.06 1.06-1.06 1.06 1.06 1.06-1.06 1.06L13.5 9.5zm-8.3 1.06 1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06L8.38 9.5zM15.44 17c-.69-1.19-1.97-2-3.44-2s-2.75.81-3.44 2H6.88c.3-.76.76-1.43 1.34-1.99L5.24 13.3c-.45.26-1.01.28-1.49 0-.72-.41-.96-1.33-.55-2.05s1.33-.96 2.05-.55c.48.28.74.78.74 1.29l3.58 2.07c.73-.36 1.55-.56 2.43-.56 2.33 0 4.32 1.45 5.12 3.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
