import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmergencyTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm18.43 16.87-4.68-2.7c-.33-.2-.75.04-.75.43V20h-2v-5.4c0-.38-.42-.63-.75-.43l-4.68 2.7-1-1.73 4.68-2.7c.33-.19.33-.67 0-.87l-4.68-2.7 1-1.73 4.68 2.7c.33.19.75-.05.75-.44V4h2v5.4c0 .38.42.63.75.43l4.68-2.7 1 1.73-4.68 2.7c-.33.19-.33.67 0 .87l4.68 2.7z',
        props,
        attrs
      );
  },
});