import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MedicalInformationTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 9c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2H4v11h16V9zm-4 7H9v2H7v-2H5v-2h2v-2h2v2h2zm6 1.5h-4V16h4zm2-3h-6V13h6z',
        props,
        attrs
      );
  },
});