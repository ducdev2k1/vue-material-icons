import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackupTableTwoToneIcon',
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
              d: 'M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
