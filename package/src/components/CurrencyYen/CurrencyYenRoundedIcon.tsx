import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurrencyYenRoundedIcon',
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
              d: 'M6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46.79 0 1.27.87.84 1.54L13.92 11H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-4v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H7c-.55 0-1-.45-1-1s.45-1 1-1h4v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h3.08l-4.1-6.46C5.55 3.87 6.03 3 6.82 3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
