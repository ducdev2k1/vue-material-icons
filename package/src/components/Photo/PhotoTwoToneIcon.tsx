import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PhotoTwoToneIcon',
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
              d: 'M19 5H5v14h14zM6 17l3-3.86 2.14 2.58 3-3.87L18 17z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm6.14 10.72L9 13.14 6 17h12l-3.86-5.14z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
