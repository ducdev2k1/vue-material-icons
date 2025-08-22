import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsertInvitationTwoToneIcon',
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
              d: 'M19 5H5v2h14z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2M5 7V5h14v2zm0 2h14v10H5zm7 3h5v5h-5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
