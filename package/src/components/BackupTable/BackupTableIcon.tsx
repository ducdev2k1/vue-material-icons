import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackupTableIcon',
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
              d: 'M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
