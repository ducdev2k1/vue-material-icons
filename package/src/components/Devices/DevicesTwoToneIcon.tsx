import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DevicesTwoToneIcon',
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
              d: 'M18 10h4v7h-4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M23 8h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4zM4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
