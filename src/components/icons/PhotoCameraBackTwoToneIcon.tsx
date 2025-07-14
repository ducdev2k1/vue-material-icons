import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoCameraBackTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'm15.95 7-1.83-2H9.88L8.05 7H4v12h16V7zM6 17l3-4 2.25 3 3-4L18 17z',
        props,
        attrs
      );
  },
});