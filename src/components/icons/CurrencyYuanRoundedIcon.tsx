import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurrencyYuanRoundedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 21c-.55 0-1-.45-1-1v-6H7c-.55 0-1-.45-1-1s.45-1 1-1h3.72L5.98 4.54C5.55 3.87 6.03 3 6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46.79 0 1.27.87.84 1.54L13.28 12H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v6c0 .55-.45 1-1 1',
        props,
        attrs
      );
  },
});