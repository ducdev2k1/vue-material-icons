import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignLanguageIcon',
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
              d: 'm12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01l.26-.13 5.73 5.46c.5.47.78 1.13.78 1.81v5.23c0 1.38-1.12 2.5-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1zm-.71-5.88c-.84.4-1.17.62-1.63 1.19l-2.7-2.85c-.38-.4-.36-1.03.04-1.41s1.03-.36 1.41.04zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L6.31 8.61c-.38-.4-.37-1.03.04-1.41.4-.38 1.03-.36 1.41.04zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.35l-.27-.1c-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.79 3.99-.73.69-4.82-5.08c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.78 3.98L15.38 9l3.61 3.43.61.58c.29.27.53.57.73.9',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
