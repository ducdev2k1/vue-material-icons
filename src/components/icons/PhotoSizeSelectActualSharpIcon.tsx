import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoSizeSelectActualSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M23 3H1v18h22zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z',
        props,
        attrs
      );
  },
});