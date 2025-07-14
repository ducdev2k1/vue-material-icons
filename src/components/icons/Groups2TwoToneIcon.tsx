import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Groups2TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15.43 15.48c-1.1-.49-2.26-.73-3.43-.73-1.18 0-2.33.25-3.43.73-.23.1-.4.29-.49.52h7.85c-.1-.23-.27-.42-.5-.52m-2.49-6.69C12.86 8.33 12.47 8 12 8s-.86.33-.94.79l-.2 1.21h2.28z',
        props,
        attrs
      );
  },
});