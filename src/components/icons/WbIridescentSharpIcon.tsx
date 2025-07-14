import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WbIridescentSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 15h14V9.05H5zm6-14v3h2V1zm8.04 2.6-1.79 1.79 1.41 1.41 1.8-1.79zM13 23v-2.95h-2V23zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8zM3.55 5.01 5.34 6.8l1.41-1.41L4.96 3.6zM4.96 20.5l1.79-1.8-1.41-1.41-1.79 1.79z',
        props,
        attrs
      );
  },
});