import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Inventory2TwoToneIcon',
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
              d: 'M4 7h16V3.98L4 4zm1 13h14V9H5zm4-8h6v2H9z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-1 18H5V9h14zm1-13H4V4l16-.02z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M9 12h6v2H9z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
