import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardMembershipSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 2H2v15h6v5l4-2 4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z',
        props,
        attrs
      );
  },
});