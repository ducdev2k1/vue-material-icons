import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FollowTheSignsRoundedIcon',
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
              d: 'M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M5.75 8.9 3.23 21.81c-.12.62.35 1.19.98 1.19h.09c.47 0 .88-.33.98-.79L6.85 15 9 17v5c0 .55.45 1 1 1s1-.45 1-1v-6.14c0-.27-.11-.52-.29-.71L8.95 13.4l.6-3c1.07 1.32 2.58 2.23 4.31 2.51.6.1 1.14-.39 1.14-1 0-.49-.36-.9-.84-.98-1.49-.25-2.75-1.15-3.51-2.38l-.95-1.6C9.35 6.35 8.7 6 8 6q-.375 0-.75.15l-4.63 1.9c-.37.15-.62.52-.62.92V12c0 .55.45 1 1 1s1-.45 1-1V9.65zM21 2h-7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2.75v13.25c0 .41.34.75.75.75s.75-.34.75-.75V9H21c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-.85 3.85-1.28 1.29c-.31.32-.85.09-.85-.35v-.54h-2.76c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.76v-.54c0-.45.54-.67.85-.35l1.28 1.29c.19.19.19.51 0 .7',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
