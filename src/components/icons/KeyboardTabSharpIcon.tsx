import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeyboardTabSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M11.59 7.41 15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6zM20 6v12h2V6z',
        props,
        attrs
      );
  },
});