import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Groups3TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15.43 15.48c-1.1-.49-2.26-.73-3.43-.73-1.18 0-2.33.25-3.43.73-.23.1-.4.29-.49.52h7.85c-.1-.23-.27-.42-.5-.52',
        props,
        attrs
      );
  },
});