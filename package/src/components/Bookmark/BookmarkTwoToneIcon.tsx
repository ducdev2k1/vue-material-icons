import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookmarkTwoToneIcon',
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
              d: 'm7 17.97 5-2.15 5 2.15V5H7z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-5-2.14-5 2.14V5h10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
