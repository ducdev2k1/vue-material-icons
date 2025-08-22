import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeckTwoToneIcon',
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
              d: 'M12 4.44 8.34 7h7.32z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M22 9 12 2 2 9h9v13h2V9zM12 4.44 15.66 7H8.34z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
