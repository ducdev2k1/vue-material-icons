import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BrightnessAutoRoundedIcon',
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
              d: 'M10.85 12.65h2.3L12 9zM20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83zm-5.91 6.71L13.6 14h-3.2l-.49 1.4c-.13.36-.46.6-.84.6-.62 0-1.05-.61-.84-1.19l2.44-6.86c.2-.57.73-.95 1.33-.95s1.13.38 1.34.94l2.44 6.86c.21.58-.22 1.19-.84 1.19-.39.01-.72-.23-.85-.59',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
