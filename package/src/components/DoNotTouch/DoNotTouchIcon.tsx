import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotTouchIcon',
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
              d: 'm13 10.17-2.5-2.5V2.25c0-.69.56-1.25 1.25-1.25S13 1.56 13 2.25zm7 2.58v-7.5C20 4.56 19.44 4 18.75 4s-1.25.56-1.25 1.25V11h-1V3.25c0-.69-.56-1.25-1.25-1.25S14 2.56 14 3.25v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zm3.5 5.92-2.5-2.5V2.25c0-.69.56-1.25 1.25-1.25S13 1.56 13 2.25zm7 2.58v-7.5C20 4.56 19.44 4 18.75 4s-1.25.56-1.25 1.25V11h-1V3.25c0-.69-.56-1.25-1.25-1.25S14 2.56 14 3.25v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
