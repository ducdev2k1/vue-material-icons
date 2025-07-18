import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WaterDropTwoToneIcon',
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
              d: 'M12 4.67c-4.05 3.7-6 6.79-6 9.14 0 3.63 2.65 6.2 6 6.2s6-2.57 6-6.2c0-2.35-1.95-5.45-6-9.14m.28 14.32c-2.13.13-4.62-1.09-5.19-4.12-.08-.45.28-.87.74-.87.37 0 .67.26.74.62.41 2.23 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
