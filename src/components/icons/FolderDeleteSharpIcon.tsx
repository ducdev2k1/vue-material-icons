import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FolderDeleteSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M22 6v14H2V4h8l2 2zm-5.5 4V9h-2v1H12v1.5h1V17h5v-5.5h1V10zm0 5.5h-2v-4h2z',
        props,
        attrs
      );
  },
});