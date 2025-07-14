import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableBarTwoToneIcon',
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
    'tag': 'ellipse',
    'props': {
      'cx': '12',
      'cy': '7.5',
      'opacity': '.3',
      'rx': '7.72',
      'ry': '1.5'
    }
  }
],
        props,
        attrs
      );
  },
});