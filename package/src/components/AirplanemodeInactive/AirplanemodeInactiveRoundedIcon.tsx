import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AirplanemodeInactiveRoundedIcon',
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
              d: 'M22 14.6c0 .7-.67 1.2-1.34 1.01l-3.15-.93-7.01-7.01V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l7.98 4.7c.32.18.52.53.52.9m-8.5-1.1L9.56 9.56 3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l5.67 5.67-5.25 3.11c-.32.18-.52.53-.52.9 0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09.42.11 1.9.48.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-2.67l5.57 5.57c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
