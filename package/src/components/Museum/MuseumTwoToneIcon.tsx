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
    'tag': 'path',
    'props': {
      'd': 'M6 20h12V9H6zm2-9h2l2 3 2-3h2v7h-2v-4l-2 3-2-3v4H8z',
      'opacity': '.3'
    }
  }
],
              props,
              attrs
            );
        },
      });