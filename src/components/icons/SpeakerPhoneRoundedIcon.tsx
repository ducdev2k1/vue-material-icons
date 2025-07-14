import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpeakerPhoneRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm7.76 7.83.02.02c.35.35.89.38 1.3.09.83-.57 1.84-.92 2.92-.92s2.09.35 2.92.93c.4.29.95.26 1.3-.09l.02-.02c.42-.42.39-1.14-.09-1.49C14.98 5.5 13.55 5 12 5s-2.98.5-4.14 1.34c-.49.35-.52 1.07-.1 1.49',
        props,
        attrs
      );
  },
});