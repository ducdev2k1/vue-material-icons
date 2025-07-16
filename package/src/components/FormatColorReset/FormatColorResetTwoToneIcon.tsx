import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatColorResetTwoToneIcon',
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
              d: 'm10.93 7.83 4.77 4.77c-.62-1.81-2.17-4.24-3.71-6.24-.35.47-.71.96-1.06 1.47M12 18c.96 0 1.83-.36 2.53-.92l-5.72-5.72C8.32 12.38 8 13.31 8 14c0 2.21 1.79 4 4 4',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
