import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaBluetoothOffRoundedIcon',
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
              d: 'M9 6.17V5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v1.17zM19.42 15l2.18 2.17c.22.22.22.58 0 .8s-.58.22-.8 0l-5.98-5.98c-.22-.22-.22-.58 0-.8s.58-.22.8 0l2.35 2.35V9.61c0-.45.54-.67.85-.35l2.82 2.82c.2.2.2.51 0 .71zm-.25-1.45 1.13-1.13-1.13-1.13zm1.32 6.94c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-3.28-3.28-.16.16c-.23.23-.62.23-.85 0s-.23-.62 0-.85l.16-.16L11 13.83v3.02c0 2.07-1.68 4.01-3.74 4.14C4.94 21.13 3 19.29 3 17c0-2.21 1.79-4 4.01-4 .73 0 1.41.21 2 .55v-1.72L2.1 4.92a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
