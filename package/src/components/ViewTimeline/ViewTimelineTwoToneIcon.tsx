import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ViewTimelineTwoToneIcon',
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
              d: 'M5 19h14V5H5zm7-12h6v2h-6zm-3 4h6v2H9zm-3 4h6v2H6z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M6 15h6v2H6zm6-8h6v2h-6zm-3 4h6v2H9z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
