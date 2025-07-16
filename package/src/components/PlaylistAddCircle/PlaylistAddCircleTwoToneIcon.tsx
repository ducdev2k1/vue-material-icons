import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlaylistAddCircleTwoToneIcon',
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
              d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm10 3v2h-2v-2h-2v-2h2v-2h2v2h2v2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
