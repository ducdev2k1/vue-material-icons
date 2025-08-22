import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventSeatTwoToneIcon',
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
              d: 'M9 5h6v7H9z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10zm-2 7H9V5h6zm4-2h3v3h-3zM2 10h3v3H2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
