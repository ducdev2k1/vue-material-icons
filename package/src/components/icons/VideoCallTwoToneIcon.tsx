import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoCallTwoToneIcon',
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
      'd': 'M5 16h10V8H5zm2-5h2V9h2v2h2v2h-2v2H9v-2H7z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});