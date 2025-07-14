import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IceSkatingTwoToneIcon',
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
              d: 'M5 16V5h5v1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5H10l.1 1H8.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.81c.45 1.12 1.4 2.01 2.6 2.36l2.62.73C16.4 12.33 17 13.1 17 14v2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
