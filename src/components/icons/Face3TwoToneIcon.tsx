import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Face3TwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.5 8c.73 0 1.41-.25 1.99-.65-1.27-1.77-3.23-3-5.49-3.28v.43C13 6.43 14.57 8 16.5 8M11 4.5v-.43c-2.26.28-4.22 1.51-5.49 3.28.58.4 1.26.65 1.99.65C9.43 8 11 6.43 11 4.5M2.75 15.8 2.19 22H12c-4.18 0-7.75-2.56-9.25-6.2M12 22h9.81l-.56-6.2C19.75 19.44 16.18 22 12 22',
        props,
        attrs
      );
  },
});