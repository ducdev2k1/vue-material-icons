import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoiseAwareRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15.62 16.45c.36-.65-.15-1.45-.9-1.45-.34 0-.68.16-.84.47s-.5.53-.88.53c-.43 0-.81-.27-.95-.68-.15-.44-.4-1.08-.93-1.61l-1.36-1.36C9.28 11.87 9 11.19 9 10.5 9 9.12 10.12 8 11.5 8c.98 0 1.84.57 2.24 1.4.18.36.52.6.91.6.75 0 1.22-.79.89-1.46C14.82 7.04 13.28 6 11.5 6c-2.89 0-5.15 2.74-4.33 5.76.22.8.68 1.51 1.27 2.1l1.27 1.27c.15.16.28.38.4.71.41 1.13 1.38 2.04 2.58 2.16 1.26.11 2.38-.54 2.93-1.55',
        props,
        attrs
      );
  },
});