import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeachAccessTwoToneIcon',
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
              d: 'M7.6 7.6c-.47 2.34.03 4.78 1.39 6.83l5.45-5.45c-1.53-1.02-3.28-1.56-5.08-1.56-.6 0-1.19.06-1.76.18M13.12 5c-.93 0-1.82.16-2.67.46 1.91.19 3.79.89 5.44 2.07l1.39-1.39C16.03 5.4 14.61 5 13.12 5M5 13.12c0 1.49.4 2.91 1.14 4.15l1.39-1.39c-1.18-1.65-1.88-3.52-2.07-5.44-.3.86-.46 1.76-.46 2.68',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
