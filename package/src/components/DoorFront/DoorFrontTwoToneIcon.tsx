import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DoorFrontTwoToneIcon',
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
              d: 'M7 19h10V5H7zm6-8h2v2h-2z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M13 11h2v2h-2z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-2 0H7V5h10z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
