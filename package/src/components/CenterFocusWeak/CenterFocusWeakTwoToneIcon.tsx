import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CenterFocusWeakTwoToneIcon',
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
              d: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m9 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m9-9c0-1.1-.9-2-2-2h-4v2h4v4h2zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
