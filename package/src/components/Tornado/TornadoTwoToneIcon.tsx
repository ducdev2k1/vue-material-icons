import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TornadoTwoToneIcon',
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
              d: 'M9.1 13h5.8l1.74-3H7.36zm2.9 5.01L13.74 15h-3.48zM4.47 5l1.74 3h11.58l1.74-3z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm1 3 11 19L23 3zm11 15.01L10.26 15h3.48zM14.9 13H9.1l-1.74-3h9.27zM6.21 8 4.47 5h15.06l-1.74 3z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
