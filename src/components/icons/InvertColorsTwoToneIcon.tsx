import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InvertColorsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7.75 8.99C6.62 10.1 6 11.57 6 13.13 6 16.37 8.69 19 12 19V4.81z',
        props,
        attrs
      );
  },
});