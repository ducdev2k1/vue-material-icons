import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FactCheckTwoToneIcon',
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
              d: 'M4 19h16V5H4zm9.41-8.25 1.41 1.42L17.99 9l1.42 1.42L14.82 15 12 12.16zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H4V5h16z',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zm0 4h5v2H5zm0 4h5v2H5z',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
