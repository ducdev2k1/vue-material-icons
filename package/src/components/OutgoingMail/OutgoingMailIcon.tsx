import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OutgoingMailIcon',
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
              d: 'M18.5 11c.17 0 .34.01.5.03V6.87C19 5.84 18.16 5 17.13 5H3.87C2.84 5 2 5.84 2 6.87v10.26C2 18.16 2.84 19 3.87 19h9.73c-.38-.75-.6-1.6-.6-2.5 0-3.04 2.46-5.5 5.5-5.5m-8.1 2L4 9.19V7h.23l6.18 3.68L16.74 7H17v2.16z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
