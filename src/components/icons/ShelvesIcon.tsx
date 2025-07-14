import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShelvesIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M19 1v2H5V1H3v22h2v-2h14v2h2V1zm0 4v6h-6V7H7v4H5V5zm-2 14v-4h-6v4H5v-6h14v6z',
        props,
        attrs
      );
  },
});