import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MicExternalOffRoundedIcon',
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
              d: 'M14 6c0-1.24 1.14-2.22 2.42-1.96.94.2 1.58 1.09 1.58 2.05v9.08l2 2V6.16c0-2.08-1.68-4.03-3.76-4.15C13.92 1.87 12 3.71 12 6v3.17l2 2zm-4-1c0-1.66-1.34-3-3-3-.62 0-1.19.19-1.67.5l4.15 4.15C9.8 6.18 10 5.61 10 5M1.39 2.81C1 3.2 1 3.83 1.39 4.22L5.17 8H5.1c-.59 0-1.05.51-1 1.1l.85 8.45c.03.26.25.45.5.45H6c0 2.34 2.01 4.21 4.39 3.98 2.08-.2 3.61-2.06 3.61-4.15v-1l5.78 5.78c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0M12 17.91c0 .96-.64 1.86-1.58 2.05C9.14 20.22 8 19.24 8 18h.55c.26 0 .47-.19.5-.45l.52-5.16L12 14.83z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
