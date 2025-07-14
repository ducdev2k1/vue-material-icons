import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Diversity2RoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M10.77 15.23c.4-.4.39-1.07-.04-1.45-2.56-2.31-4.08-3.88-3.66-5.45C7.29 7.52 8.01 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2 .87 0 1.55.54 1.77 1.32.35-.04.68-.06 1-.06.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04.26-.71.31-1.53-.18-2.43-.43-.81-1.22-1.43-2.12-1.57C10.62.74 9 2.18 9 4c0 .37.08.71.2 1.04-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.23 1.73 4.01 4.4 6.41.39.36 1 .34 1.37-.03',
        props,
        attrs
      );
  },
});