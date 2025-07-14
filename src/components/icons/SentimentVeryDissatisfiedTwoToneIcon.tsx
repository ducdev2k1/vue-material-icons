import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SentimentVeryDissatisfiedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M6.76 8.82l1.06-1.06 1.06 1.06 1.06-1.06L11 8.82 9.94 9.88 11 10.94 9.94 12l-1.06-1.06L7.82 12l-1.06-1.06 1.06-1.06zM6.89 17c.8-2.04 2.78-3.5 5.11-3.5s4.31 1.46 5.11 3.5zm10.35-6.06L16.18 12l-1.06-1.06L14.06 12 13 10.94l1.06-1.06L13 8.82l1.06-1.06 1.06 1.06 1.06-1.06 1.06 1.06-1.06 1.06z',
        props,
        attrs
      );
  },
});