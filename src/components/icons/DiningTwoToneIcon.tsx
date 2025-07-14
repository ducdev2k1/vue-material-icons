import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiningTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 20h16V4H4zM14.75 6c1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18l-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4m-8.25.5c0-.28.22-.5.5-.5s.5.22.5.5V9h.75V6.5c0-.28.22-.5.5-.5s.5.22.5.5V9H10V6.5c0-.28.23-.5.5-.5.28 0 .5.22.5.5v3.8c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93z',
        props,
        attrs
      );
  },
});