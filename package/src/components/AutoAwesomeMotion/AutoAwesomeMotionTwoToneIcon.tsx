import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoAwesomeMotionTwoToneIcon',
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
              d: 'M12 12h8v8h-8z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
