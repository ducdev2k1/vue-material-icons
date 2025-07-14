import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WifiProtectedSetupSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.71 5.29 19 3h-8v8l2.3-2.3c1.97 1.46 3.25 3.78 3.25 6.42 0 1.31-.32 2.54-.88 3.63 2.33-1.52 3.88-4.14 3.88-7.13 0-2.52-1.11-4.77-2.84-6.33',
        props,
        attrs
      );
  },
});