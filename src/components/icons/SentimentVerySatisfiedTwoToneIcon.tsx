import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SentimentVerySatisfiedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M8.88 7.82 11 9.94 9.94 11 8.88 9.94 7.82 11 6.76 9.94zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5m4.18-6.5-1.06-1.06L14.06 11 13 9.94l2.12-2.12 2.12 2.12z',
        props,
        attrs
      );
  },
});