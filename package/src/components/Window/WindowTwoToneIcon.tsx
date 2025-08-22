import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WindowTwoToneIcon',
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
              d: 'M13 13h6v6h-6zm-8 0h6v6H5zm0-8h6v6H5zm8 0h6v6h-6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 16H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
