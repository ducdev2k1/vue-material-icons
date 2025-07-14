import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkedCameraTwoToneIcon',
  props: {
    size: [String, Number],
    color: String,
    viewBox: String,
  },
  setup(props: IIconProps, { attrs }) {
    return () =>
      useIconRender(
        'M20 20H4V8h4.05l1.83-2H15V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-2zM16 2v1.33c2.58 0 4.66 2.09 4.67 4.66H22C21.99 4.68 19.31 2 16 2m0 2.67V6c1.11 0 1.99.89 2 1.99h1.33c-.01-1.84-1.49-3.32-3.33-3.32',
        props,
        attrs
      );
  },
});