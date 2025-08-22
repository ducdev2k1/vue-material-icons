import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackupTableSharpIcon',
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
              d: 'M20 6v14H6v2h16V6z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
