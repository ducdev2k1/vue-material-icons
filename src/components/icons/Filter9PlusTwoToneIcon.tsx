import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter9PlusTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M7 17h14v-6h-2v2h-2v-2h-2V9h2V7h2v2h2V3H7zm2-5h3v-1h-1c-1.1 0-2-.89-2-2V8c0-1.11.9-2 2-2h1c1.1 0 2 .89 2 2v4c0 1.11-.9 2-2 2H9z',
        props,
        attrs
      );
  },
});