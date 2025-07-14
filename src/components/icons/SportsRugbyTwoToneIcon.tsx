import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SportsRugbyTwoToneIcon',
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
      'd': 'M18.29 5.71c-1.93.64-5.02 2.19-7.7 4.88-2.71 2.71-4.24 5.81-4.87 7.7 1.93-.64 5.03-2.2 7.7-4.87 2.71-2.72 4.24-5.82 4.87-7.71M9.17 9.17c2.15-2.15 4.56-3.67 6.61-4.61-1.68.08-5.38.56-8.02 3.2-2.32 2.32-3.1 5.58-3.2 8.04.94-2.05 2.45-4.47 4.61-6.63m5.66 5.66c-2.15 2.15-4.56 3.67-6.61 4.61 1.68-.08 5.39-.55 8.03-3.19 2.32-2.32 3.1-5.58 3.2-8.04-.95 2.04-2.46 4.46-4.62 6.62',
      'opacity': '.3'
    }
  }
],
        props,
        attrs
      );
  },
});