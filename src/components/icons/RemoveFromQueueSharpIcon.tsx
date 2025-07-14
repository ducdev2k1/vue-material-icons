import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RemoveFromQueueSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2H8v-2z',
        props,
        attrs
      );
  },
});