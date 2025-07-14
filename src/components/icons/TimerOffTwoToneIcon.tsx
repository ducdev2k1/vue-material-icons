import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerOffTwoToneIcon',
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
      'd': 'M12 20c1.47 0 2.83-.45 3.95-1.22L6.22 9.05C5.45 10.17 5 11.53 5 13c0 3.87 3.13 7 7 7m0-14c-.94 0-1.83.19-2.65.52L11 8.17V8h2v2.17l5.48 5.48c.33-.82.52-1.71.52-2.65 0-3.87-3.13-7-7-7',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});