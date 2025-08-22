import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Filter7TwoToneIcon',
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
              d: 'M7 17h14V3H7zm4-10V5h6v2l-4 8h-2l4-8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m10-8 4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
