import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoFixOffOutlinedIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        [
          {
            tag: 'path',
            props: {
              d: 'm20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42 1.41 1.41-1.46 1.46 1.41 1.41 2.17-2.17c.39-.39.39-1.02 0-1.41l-2.83-2.83c-.19-.19-.44-.29-.7-.29s-.51.1-.71.29l-2.17 2.17 1.41 1.41zM1.39 4.22l7.07 7.07-6.17 6.17c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l6.17-6.17 7.07 7.07 1.41-1.41L2.81 2.81zm9.9 9.9-5.46 5.46-1.41-1.41 5.46-5.46z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
