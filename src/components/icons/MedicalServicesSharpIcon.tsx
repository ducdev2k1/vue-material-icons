import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MedicalServicesSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16 6V2H8v4H2v16h20V6zm-6-2h4v2h-4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3z',
        props,
        attrs
      );
  },
});