import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter8TwoToneIcon',
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
              d: 'M7 17h14V3H7zm4-5.5c0-.83.67-1.5 1.5-1.5-.83 0-1.5-.67-1.5-1.5V7c0-1.11.9-2 2-2h2c1.1 0 2 .89 2 2v1.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V13c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2zM13 7h2v2h-2zm0 4h2v2h-2z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
