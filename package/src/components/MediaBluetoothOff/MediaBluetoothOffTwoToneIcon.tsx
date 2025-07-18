import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MediaBluetoothOffTwoToneIcon',
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
              d: 'M9 6.17V3h6v4h-4v1.17zM19.42 15 22 17.57l-.8.8-6.78-6.78.8-.8 2.75 2.75V9h.6L22 12.43zm-.25-1.45 1.13-1.13-1.13-1.13zm-1.96 3.66 3.98 3.98-1.41 1.41-3.98-3.98-.58.58-.85-.85.58-.58L11 13.83V17c0 2.21-1.78 4-3.99 4S3 19.21 3 17s1.79-4 4.01-4c.73 0 1.41.21 2 .55v-1.72L1.39 4.22 2.8 2.81l13.56 13.56z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
