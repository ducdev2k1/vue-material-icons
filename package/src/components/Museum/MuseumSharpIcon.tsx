import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MuseumSharpIcon',
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
              d: 'M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
