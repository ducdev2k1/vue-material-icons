import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FlutterDashTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 11c0 .81.1 1.53.25 2.21.18-.69.46-1.33.83-1.92-.21-.47-.34-.99-.34-1.54C5.75 7.68 7.43 6 9.5 6c.96 0 1.84.37 2.5.97.66-.6 1.54-.97 2.5-.97 2.07 0 3.75 1.68 3.75 3.75 0 .55-.12 1.07-.34 1.54.37.59.66 1.24.84 1.94.15-.68.25-1.41.25-2.23 0-3.86-3.14-7-7-7s-7 3.14-7 7',
        props,
        attrs
      );
  },
});