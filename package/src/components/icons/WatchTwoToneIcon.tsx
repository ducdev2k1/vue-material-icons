import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WatchTwoToneIcon',
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
      'd': 'M14.72 4.48 14.31 2H9.7l-.41 2.47C10.13 4.17 11.05 4 12 4c.96 0 1.87.17 2.72.48M9.29 19.53 9.7 22h4.61l.41-2.48c-.85.31-1.76.48-2.72.48-.95 0-1.87-.17-2.71-.47',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});