import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FontDownloadOffSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm12.58 9.75-.87-.87.23-.66h.1zm7.91 13.56L19.17 22H2V4.83L.69 3.51 2.1 2.1l19.8 19.8zm-8.39-8.38-3.3-3.3L6.41 18h2.08l1.09-3.07zm-1.75-7.41L10.92 6h2.14l2.55 6.79L22 19.17V2H4.83z',
        props,
        attrs
      );
  },
});