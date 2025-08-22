import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CameraswitchTwoToneIcon',
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
              d: 'M13.17 8h-2.34l-1 1H8v6h8V9h-1.83zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H8V9h1.83l1-1h2.34l1 1H16z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '12',
              cy: '12',
              r: '2',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M8.57.52 13.05 5V2.05c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.03 15.49-1.58 8.57.52m2.38 21.44c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
