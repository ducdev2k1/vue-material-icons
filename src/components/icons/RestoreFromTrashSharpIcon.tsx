import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RestoreFromTrashSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M6 21h12V7H6zm6-11 4 4h-2v4h-4v-4H8zm3.5-6-1-1h-5l-1 1H5v2h14V4z',
        props,
        attrs
      );
  },
});