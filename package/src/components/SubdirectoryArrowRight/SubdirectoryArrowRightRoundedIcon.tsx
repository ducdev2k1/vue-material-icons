import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SubdirectoryArrowRightRoundedIcon',
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
              d: 'm18.29 15.71-4.58 4.58c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42s1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
