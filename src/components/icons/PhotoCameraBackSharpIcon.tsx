import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoCameraBackSharpIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M16.83 5 15 3H9L7.17 5H2v16h20V5zM6 17l3-4 2.25 3 3-4L18 17z',
        props,
        attrs
      );
  },
});