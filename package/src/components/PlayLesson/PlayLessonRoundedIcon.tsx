import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayLessonRoundedIcon',
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
              d: 'M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7m-10.24-.45c-.34.2-.76-.04-.76-.43V4h5v6.12c0 .39-.42.63-.76.43L9.5 9.5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
