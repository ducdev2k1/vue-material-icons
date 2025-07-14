import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShutterSpeedTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IconProps, { attrs }) {
    return () =>
      useIconRender(
        'M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7m0 1c.46 0 .9.06 1.33.15l-2.72 4.7-2.32-3.56C9.31 7.49 10.6 7 12 7m-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1m.35 2h5.33l-2.03 3.5.11.06c-1.59-.64-2.84-1.94-3.41-3.56M12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92 2.11 3.9c-1 .74-2.23 1.19-3.57 1.19m6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1m-5.74-2 2.05-3.54c1.56.65 2.77 1.94 3.34 3.54z',
        props,
        attrs
      );
  },
});