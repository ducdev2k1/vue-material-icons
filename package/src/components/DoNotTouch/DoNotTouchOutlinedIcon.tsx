import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotTouchOutlinedIcon',
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
              d: 'M2.81 2.81 1.39 4.22 7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12 1.41-1.41zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03m-3.17-9H14V3.25c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V11h1V5.25c0-.69.56-1.25 1.25-1.25S20 4.56 20 5.25v11.92l-2-2V13h-2.17zm-.83-.83V2.25C13 1.56 12.44 1 11.75 1s-1.25.56-1.25 1.25v5.42zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
