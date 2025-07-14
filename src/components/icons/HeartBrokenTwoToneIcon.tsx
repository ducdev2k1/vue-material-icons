import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeartBrokenTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.23 5.42C8.69 5.15 8.09 5 7.5 5 5.54 5 4 6.54 4 8.5c0 2.5 2.45 4.84 6.24 8.23l.53-4.73H7.35zM16.5 5c-.37 0-.75.06-1.12.18L14.77 7h2.91l-2.56 8.53C17.98 12.93 20 10.71 20 8.5 20 6.54 18.46 5 16.5 5',
        props,
        attrs
      );
  },
});