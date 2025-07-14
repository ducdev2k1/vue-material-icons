import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoiseAwareSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 15h-2c0 .55-.45 1-1 1-.43 0-.81-.27-.95-.68-.15-.44-.4-1.08-.93-1.61l-1.36-1.36C9.28 11.87 9 11.19 9 10.5 9 9.12 10.12 8 11.5 8c1.21 0 2.22.86 2.45 2h2.02c-.25-2.25-2.16-4-4.47-4C9.02 6 7 8.02 7 10.5c0 1.22.49 2.41 1.35 3.27l1.36 1.36c.17.17.31.44.44.82C10.56 17.17 11.71 18 13 18c1.65 0 3-1.35 3-3',
        props,
        attrs
      );
  },
});