import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimCardDownloadTwoToneIcon',
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
      'd': 'M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4-4-4h3z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});