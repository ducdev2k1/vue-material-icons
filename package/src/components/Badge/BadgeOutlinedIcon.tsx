import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BadgeOutlinedIcon',
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
              d: 'M14 12h4v1.5h-4zm0 3h4v1.5h-4z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9 0V4h2v5h-2zm9 13H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '9',
              cy: '13.5',
              r: '1.5',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M11.08 16.18c-.64-.28-1.34-.43-2.08-.43s-1.44.15-2.08.43c-.56.24-.92.78-.92 1.39V18h6v-.43c0-.61-.36-1.15-.92-1.39',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
