import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddHomeWorkOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11 14H5v5H3v-6.97l5-3.57 5 3.57v1.08c.57-.59 1.25-1.07 2-1.42V11L8 6l-7 5v10h6v-5h2v5h2.68c-.43-.91-.68-1.92-.68-3zm6-7h2v2h-2z',
        props,
        attrs
      );
  },
});