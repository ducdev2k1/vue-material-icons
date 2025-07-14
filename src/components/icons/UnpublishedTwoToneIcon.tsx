import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnpublishedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm13.59 10.76 2.65-2.65 1.41 1.41L15 12.17l3.88 3.88C19.59 14.86 20 13.48 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12zm4.07-1.23-1.41-1.41-2.65 2.65 1.41 1.41zm-1.6 9.35L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65C4.41 9.14 4 10.52 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12',
        props,
        attrs
      );
  },
});