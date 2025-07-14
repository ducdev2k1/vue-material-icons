import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VoiceChatTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
  {
    'tag': 'path',
    'props': {
      'd': 'M4 17.17 5.17 16H20V4H4zM7 7h7v2.4L17 7v6l-3-2.4V13H7z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});