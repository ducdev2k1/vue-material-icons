import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FireplaceTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 20h2v-2h2.23c-.75-.93-1.2-2.04-1.23-3-.02-.53-.73-4.43 6-8 0 0-.8 2.61 2.15 4.63.76.52 1.85 1.48 1.85 3.37 0 1.13-.39 2.16-1.02 3H18v2h2V4H4z',
        props,
        attrs
      );
  },
});