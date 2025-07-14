import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DirectionsBusTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm17.37 17 .29-.27c.13-.11.34-.36.34-.73v-4H6v4c0 .37.21.62.34.73l.29.27zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16m5.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5M12 4c-3.69 0-5.11.46-5.66.99h11.31C17.11 4.46 15.69 4 12 4',
        props,
        attrs
      );
  },
});