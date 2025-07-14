import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShoppingBagSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16zm-10 5H8V8h2zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 7h-2V8h2z',
        props,
        attrs
      );
  },
});