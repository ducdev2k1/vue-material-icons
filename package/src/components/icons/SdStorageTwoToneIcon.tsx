import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SdStorageTwoToneIcon',
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
      'd': 'M6 8.83V20h12V4h-7.17zM15 7h2v4h-2zm-3 0h2v4h-2zm-1 4H9V7h2z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});