import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TranscribeRoundedIcon',
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
              d: 'M22.54 10.28c-.34-.82-.34-1.72 0-2.54.19-.45.1-.96-.24-1.3l-.1-.1c-.56-.56-1.51-.44-1.88.26-.8 1.48-.79 3.24.03 4.79.37.69 1.31.83 1.86.27l.1-.1c.34-.33.42-.84.23-1.28m-3.72 4.83c.4-.4.46-1.02.13-1.48-1.97-2.73-1.96-6.39.01-9.23.32-.47.26-1.1-.14-1.5-.5-.5-1.34-.46-1.78.1-2.73 3.54-2.73 8.36.02 12 .43.56 1.27.61 1.76.11M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56C1.61 16.07 1 17.1 1 18.22V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1.78c0-1.12-.61-2.15-1.61-2.66',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
