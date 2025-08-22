import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HourglassBottomTwoToneIcon',
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
              d: 'm16 16.5-4-4-4 4V20h8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm16 16.5-4-4-4 4V20h8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99zM8 7.5V4h8v3.5l-4 4zm0 9 4-4 4 4V20H8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
