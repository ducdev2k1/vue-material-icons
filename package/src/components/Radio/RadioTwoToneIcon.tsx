import type { IIconProps } from '@/utils/useIconRender';
import { useIconRender } from '@/utils/useIconRender';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RadioTwoToneIcon',
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
              d: 'M20 13H4v7h16zM8 18.98c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
              opacity: '.3',
            },
          },
          {
            tag: 'path',
            props: {
              d: 'M2 20c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8zM4 8h16v3h-2V9h-2v2H4zm0 5h16v7H4z',
            },
          },
          {
            tag: 'circle',
            props: {
              cx: '8',
              cy: '16.48',
              r: '2.5',
            },
          },
        ],
        props,
        attrs,
      );
  },
});
