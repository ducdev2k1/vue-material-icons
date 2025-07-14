import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FastForwardOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M15 9.86 18.03 12 15 14.14zm-9 0L9.03 12 6 14.14zM13 6v12l8.5-6zM4 6v12l8.5-6z',
        props,
        attrs
      );
  },
});