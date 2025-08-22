import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StopTwoToneIcon',
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
              d: 'M8 8h8v8H8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 18h12V6H6zM8 8h8v8H8z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
