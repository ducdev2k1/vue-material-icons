import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LibraryMusicOutlinedIcon',
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
              d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
