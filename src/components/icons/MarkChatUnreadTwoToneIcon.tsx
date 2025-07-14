import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarkChatUnreadTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 16h16V7.9c-.32.06-.66.1-1 .1-2.42 0-4.44-1.72-4.9-4H4z',
        props,
        attrs
      );
  },
});