import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WbAutoTwoToneIcon',
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
              d: 'M8 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.35 0 4.38-1.36 5.36-3.32l.01-.01c.4-.81.63-1.71.63-2.67 0-3.31-2.69-6-6-6m2.3 10-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9zm-3.45-3.35h2.3L8 9z',
              opacity: '.3',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
