import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteAddTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M13 4H6v16h12V9h-5zm3 10v2h-3v3h-2v-3H8v-2h3v-3h2v3z',
        props,
        attrs
      );
  },
});