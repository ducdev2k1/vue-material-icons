import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RunCircleRoundedIcon',
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
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1.5 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m1.91 5.91c-.71-.2-1.63-.74-2.32-1.66l-.41 2.35 1.19 1.3c.08.08.13.2.13.32v3.28c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3.08l-1.11-1.21-.43 2.15c-.05.27-.32.45-.59.39l-2.78-.57c-.27-.06-.45-.32-.39-.59s.32-.44.59-.39l2.29.47.96-4.89-1.54.57v1.15c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.21.13-.4.33-.47l2.95-1.09c.49-.18 1.02.04 1.25.51.65 1.35 1.55 1.85 2.1 2 .22.05.37.23.37.45v.04c0 .31-.29.55-.59.47',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
