import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmergencyShareOutlinedIcon',
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
              d: 'M12 4c1.93 0 3.68.78 4.95 2.05l-1.41 1.41C14.63 6.56 13.38 6 12 6s-2.63.56-3.54 1.46L7.05 6.05C8.32 4.78 10.07 4 12 4m7.78-.77-1.41 1.41C16.74 3.01 14.49 2 12.01 2S7.27 3.01 5.64 4.63L4.22 3.22C6.22 1.23 8.97 0 12.01 0s5.78 1.23 7.77 3.23M12 11c1.94 0 4 1.45 4 4.15 0 .94-.55 2.93-4 6.17-3.45-3.24-4-5.23-4-6.17 0-2.7 2.06-4.15 4-4.15m0-2c-3.15 0-6 2.41-6 6.15q0 3.735 6 8.85 6-5.115 6-8.85C18 11.41 15.15 9 12 9m1.5 6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
