import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotAccessibleRoundedIcon',
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
              d: 'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-2 18c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07c-.41 1.16-1.52 2-2.83 2m10.49.49L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l7.9 7.9V15c0 1.1.9 2 2 2h2.17l4.9 4.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41m-2.33-9.56c-1.25-.21-2.43-.88-3.23-1.76l-1.29-1.43c-.24-.24-.44-.36-.63-.46-.36-.19-.72-.3-1.2-.26-.49.04-.91.27-1.23.61L14 11.05c1 .83 2.4 1.54 3.8 1.82.62.13 1.2-.34 1.2-.97 0-.48-.36-.89-.84-.97',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
