import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MuseumTwoToneIcon',
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
              d: 'M6 20h12V9H6zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
