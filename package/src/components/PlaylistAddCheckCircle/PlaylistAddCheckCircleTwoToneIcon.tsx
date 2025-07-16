import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlaylistAddCheckCircleTwoToneIcon',
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
              d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
