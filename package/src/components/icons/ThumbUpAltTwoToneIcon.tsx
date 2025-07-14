import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThumbUpAltTwoToneIcon',
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
      'd': 'M13.34 4.66 9 9v10h9l3-7v-2h-8.77z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});