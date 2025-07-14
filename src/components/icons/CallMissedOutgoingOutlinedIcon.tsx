import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CallMissedOutgoingOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7z',
        props,
        attrs
      );
  },
});