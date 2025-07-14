import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DepartureBoardTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M9.29 6H9c-3.69 0-5.11.46-5.66.99h5.74c.05-.33.12-.67.21-.99M3 14v4c0 .37.21.62.34.73l.29.27h10.74l.29-.27c.13-.11.34-.36.34-.73v-3.08c-.94-.13-1.81-.45-2.59-.92zm2.5 4c-.83 0-1.5-.67-1.5-1.5S4.67 15 5.5 15s1.5.67 1.5 1.5S6.33 18 5.5 18m8.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5',
        props,
        attrs
      );
  },
});