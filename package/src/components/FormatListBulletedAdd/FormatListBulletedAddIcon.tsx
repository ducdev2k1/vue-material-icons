import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormatListBulletedAddIcon',
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
              d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21zM7 5h13v2H7z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '3.5',
              cy: '18',
              r: '1.5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M18 11H7v2h6.11c1.26-1.24 2.99-2 4.89-2M7 17v2h4.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '3.5',
              cy: '6',
              r: '1.5',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '3.5',
              cy: '12',
              r: '1.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
