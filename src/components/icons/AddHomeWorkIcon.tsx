import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeWorkIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 11.68V11L8 6l-7 5v10h5v-6h4v6h1.68c-.43-.91-.68-1.92-.68-3 0-2.79 1.64-5.19 4-6.32m8 1.43V3H10v1.97l7 5v1.11c.33-.05.66-.08 1-.08 1.96 0 3.73.81 5 2.11M17 7h2v2h-2z',
        props,
        attrs
      );
  },
});