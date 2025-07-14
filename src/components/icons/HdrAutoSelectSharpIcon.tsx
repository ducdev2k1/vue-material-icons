import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HdrAutoSelectSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M3.5 18h-2v-2H0v6h1.5v-2.5h2V22H5v-6H3.5zm6.5-2H6.5v6H10c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5H8v-3h2zm12-2v-2h-1.5v2h-2V20h2v2H22v-2h2v-1.5zM13 22h1.5v-2h1.1l.9 2H18l-.86-2H18v-4h-5zm1.5-4.5h2v1h-2zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z',
        props,
        attrs
      );
  },
});