import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CampaignRoundedIcon',
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
              d: 'M18 12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1m-1.41 4.82c-.33.44-.24 1.05.2 1.37.53.39 1.09.81 1.62 1.21.44.33 1.06.24 1.38-.2 0-.01.01-.01.01-.02.33-.44.24-1.06-.2-1.38-.53-.4-1.09-.82-1.61-1.21-.44-.33-1.06-.23-1.39.21 0 .01-.01.02-.01.02m3.22-12.01c0-.01-.01-.01-.01-.02-.33-.44-.95-.53-1.38-.2-.53.4-1.1.82-1.62 1.22-.44.33-.52.95-.19 1.38 0 .01.01.01.01.02.33.44.94.53 1.38.2.53-.39 1.09-.82 1.62-1.22.43-.32.51-.94.19-1.38M8 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h1l5 3V6zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
