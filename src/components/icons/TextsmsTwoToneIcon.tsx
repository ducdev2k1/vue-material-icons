import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextsmsTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm4 18 2-2h14V4H4zm11-9h2v2h-2zm-4 0h2v2h-2zM7 9h2v2H7z',
        props,
        attrs
      );
  },
});