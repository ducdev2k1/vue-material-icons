import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoNotTouchRoundedIcon',
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
              d: 'm13 10.17-2.5-2.5V2.25c0-.69.56-1.25 1.25-1.25S13 1.56 13 2.25zm7-4.85c0-.65-.47-1.25-1.12-1.32-.75-.08-1.38.51-1.38 1.24v5.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V3.31c0-.65-.47-1.25-1.12-1.32-.75-.06-1.38.53-1.38 1.26v7.92l6 6zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67zM17 22c.62 0 1.18-.19 1.65-.52l-.02-.02.44.44c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.92 4.92L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
