import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NightsStayRoundedIcon',
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
              d: 'M11.1 12.08c-2-3.88-.92-7.36.07-9.27.19-.36-.12-.77-.53-.72-5.02.68-8.86 5.07-8.65 10.32.01 0 .01 0 .01.01.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.13 0 5.92-1.44 7.76-3.69.26-.32.04-.79-.37-.82-2.49-.13-6.28-1.53-8.28-5.42',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
