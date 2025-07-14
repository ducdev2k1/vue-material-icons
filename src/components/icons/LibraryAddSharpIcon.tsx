import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibraryAddSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M4 6H2v16h16v-2H4zm18-4H6v16h16zm-3 9h-4v4h-2v-4H9V9h4V5h2v4h4z',
        props,
        attrs
      );
  },
});