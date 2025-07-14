import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TempleBuddhistTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4.33 10 7h4zM8 9h8v2H8zM6 20h3v-2c0-1.65 1.35-3 3-3s3 1.35 3 3v2h3v-7H6z',
        props,
        attrs
      );
  },
});