import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TempleBuddhistRoundedIcon',
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
              d: 'M21.85 9.01c-.41 0-.82.24-.95.63-.26.79-1.01 1.36-1.88 1.36H4.98c-.87 0-1.62-.57-1.88-1.36-.13-.39-.53-.62-.94-.62-.66 0-1.16.64-.95 1.26.43 1.27 1.48 2.24 2.79 2.58V20c0 1.1.9 2 2 2h4v-2.89c0-1 .68-1.92 1.66-2.08 1.26-.21 2.34.76 2.34 1.97v3h4c1.1 0 2-.9 2-2v-7.14c.46-.12 2.22-.76 2.81-2.58.2-.63-.3-1.28-.96-1.27',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
