import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AgricultureRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19.5 11.97c.93 0 1.78.28 2.5.76V7.97c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.06-1.06c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-2.83 2.83c-.2.2-.2.51 0 .71s.51.2.71 0l1.06-1.06L13 6.68v2.29c0 1.1-.9 2-2 2h-.54c.95 1.06 1.54 2.46 1.54 4 0 .34-.04.67-.09 1h3.14c.25-2.24 2.14-4 4.45-4',
        props,
        attrs
      );
  },
});