import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteAltTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M5 19h14V5H5zm9.73-11.85c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71l-1.06 1.06-2.12-2.12zM7 14.86l5.96-5.96 2.12 2.12L9.1 17H7z',
        props,
        attrs
      );
  },
});