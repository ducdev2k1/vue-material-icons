import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Diversity2TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M2.5 17.97c-.48.28-.64.89-.37 1.37s.89.64 1.37.37c.48-.28.64-.89.37-1.37s-.89-.65-1.37-.37m19 0c-.48-.28-1.09-.11-1.37.37s-.11 1.09.37 1.37 1.09.11 1.37-.37.11-1.1-.37-1.37',
        props,
        attrs
      );
  },
});