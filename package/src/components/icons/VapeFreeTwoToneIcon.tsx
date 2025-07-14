import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VapeFreeTwoToneIcon',
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
    'tag': 'circle',
    'props': {
      'cx': '10.5',
      'cy': '17.5',
      'r': '.5',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});