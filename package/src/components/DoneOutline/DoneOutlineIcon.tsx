import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoneOutlineIcon',
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
              d: 'm19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2zm0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
