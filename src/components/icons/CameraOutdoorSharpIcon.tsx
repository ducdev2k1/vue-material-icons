import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraOutdoorSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z',
        props,
        attrs
      );
  },
});