import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibraryAddCheckTwoToneIcon',
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
              d: 'M8 16h12V4H8zm2.4-6.91 2.07 2.08L17.6 6 19 7.41 12.47 14 9 10.5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.53-2L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 20h14v2H4c-1.1 0-2-.9-2-2V6h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
