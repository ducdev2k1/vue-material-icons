import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayersClearTwoToneIcon',
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
              d: 'm12 13.47.67-.53-5.02-5.02L6.26 9zm0-8.94-1.17.91 5.02 5.03L17.74 9z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
