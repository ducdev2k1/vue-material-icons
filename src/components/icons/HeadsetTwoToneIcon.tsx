import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadsetTwoToneIcon',
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
              d: 'M17 18h1c.55 0 1-.45 1-1v-3h-2zM5 17c0 .55.45 1 1 1h1v-4H5z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
