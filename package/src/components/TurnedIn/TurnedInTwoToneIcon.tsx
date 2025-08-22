import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TurnedInTwoToneIcon',
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
              d: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'm7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
