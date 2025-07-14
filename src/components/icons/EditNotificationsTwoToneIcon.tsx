import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditNotificationsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm16 14.2-.8.8h-4.6v-4.6l3.68-3.68C13.64 6.26 12.85 6 12 6c-2.21 0-4 1.79-4 4v7h8z',
        props,
        attrs
      );
  },
});