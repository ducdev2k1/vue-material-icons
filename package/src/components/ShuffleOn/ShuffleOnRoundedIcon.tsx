import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShuffleOnRoundedIcon',
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
              d: 'M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M4.3 4.7c.39-.39 1.02-.39 1.41 0l4.47 4.47-1.42 1.4L4.3 6.11a.996.996 0 0 1 0-1.41m15.29 14.8c0 .28-.22.5-.5.5H15.3c-.45 0-.67-.54-.36-.85l1.2-1.2-3.13-3.13 1.41-1.41 3.13 3.14 1.19-1.19c.31-.32.85-.1.85.35zm0-11.21c0 .45-.54.67-.85.36l-1.19-1.19L5.7 19.29c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L16.13 6.04l-1.19-1.19c-.31-.31-.09-.85.36-.85h3.79c.28 0 .5.22.5.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
