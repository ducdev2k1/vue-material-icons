import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MacroOffRoundedIcon',
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
              d: 'M4.2 13.08c-.64-.09-1.21.48-1.12 1.12C3.67 18.6 7.44 22 12 22c0-4.56-3.4-8.33-7.8-8.92M12 5.5c1.38 0 2.5 1.12 2.5 2.5 0 .99-.58 1.84-1.42 2.25l2.48 2.48c.11.02.23.03.35.03 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.01-.2C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-.57 0-1.09.2-1.51.52l3.16 3.16c.41-.85 1.26-1.43 2.25-1.43m7.98 11.65c.47-.91.8-1.9.94-2.95.09-.64-.48-1.21-1.12-1.12-1.05.14-2.05.47-2.95.94z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
