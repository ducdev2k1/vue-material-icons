import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextSnippetSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'm21 9-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z',
        props,
        attrs
      );
  },
});