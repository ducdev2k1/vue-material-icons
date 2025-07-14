import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScoreTwoToneIcon',
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
      'd': 'M5 19h8l-4-4zm0-2.5 4-4 4 4 6-6V5H5zM12 6h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7zM19 19v-6l-6 6z',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});