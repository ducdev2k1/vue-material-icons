import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextPlanTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m1 10 2.26-2.26C14.35 10.68 13.01 10 11.5 10c-2.37 0-4.35 1.66-4.86 3.88l-.96-.32C6.32 10.95 8.68 9 11.5 9c1.78 0 3.37.79 4.47 2.03L18 9v5z',
        props,
        attrs
      );
  },
});