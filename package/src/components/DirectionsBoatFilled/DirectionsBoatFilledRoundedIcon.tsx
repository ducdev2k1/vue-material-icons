import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsBoatFilledRoundedIcon',
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
              d: 'M20 21c-1.19 0-2.38-.35-3.47-.98-.33-.19-.73-.19-1.07 0-2.17 1.26-4.76 1.26-6.93 0-.33-.19-.73-.19-1.07 0-1.08.63-2.27.98-3.46.98H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1zM3.95 19H4c1.27 0 2.42-.55 3.33-1.33.39-.34.95-.34 1.34 0C9.58 18.45 10.73 19 12 19s2.42-.55 3.33-1.33c.39-.34.95-.34 1.34 0 .91.78 2.06 1.33 3.33 1.33h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28zM6 6h12v3.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
