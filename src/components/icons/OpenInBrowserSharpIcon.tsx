import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OpenInBrowserSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6-4 4h3v6h2v-6h3z',
        props,
        attrs
      );
  },
});