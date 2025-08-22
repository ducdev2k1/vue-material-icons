import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayArrowTwoToneIcon',
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
              d: 'M10 8.64v6.72L15.27 12z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm8 19 11-7L8 5zm2-10.36L15.27 12 10 15.36z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
