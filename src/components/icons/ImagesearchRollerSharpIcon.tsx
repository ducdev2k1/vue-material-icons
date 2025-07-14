import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImagesearchRollerSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 2v6H6V6H4v4h10v5h2v8h-6v-8h2v-3H2V4h4V2z',
        props,
        attrs
      );
  },
});