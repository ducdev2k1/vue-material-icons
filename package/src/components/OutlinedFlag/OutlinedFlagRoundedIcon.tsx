import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OutlinedFlagRoundedIcon',
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
              d: 'm14 6-.72-1.45c-.17-.34-.52-.55-.9-.55H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5l.72 1.45c.17.34.52.55.89.55H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4 8h-4l-1-2H7V6h5l1 2h5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
